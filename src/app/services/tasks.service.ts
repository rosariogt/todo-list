import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = []
  taskChanged = new Subject<Task[]>()

  constructor() {
    this.getTasks()
  }

  getTasks(): Task[] {
    this.getFromLocalStorage()
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task)
    this.setLocalStorage()
    this.taskChanged.next(this.tasks.slice())
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setLocalStorage()
    this.taskChanged.next(this.tasks.slice())
  }

  completeTask(id: number) {
    const task = this.tasks.find(t => t.id === id)
    if(task) {
      task.completed = !task.completed
      this.setLocalStorage()
      this.taskChanged.next(this.tasks.slice())
    }
  }

  setLocalStorage() {
    if(typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }

  getFromLocalStorage() {
    if(typeof localStorage !== 'undefined') {
      const savedTask = localStorage.getItem('tasks')
      if (savedTask) {
        this.tasks = JSON.parse(savedTask)
        this.taskChanged.next(this.tasks.slice())
      }
    }
  }

}
