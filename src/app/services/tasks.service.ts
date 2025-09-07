import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = []

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
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setLocalStorage()
  }

  completeTask(id: number) {
    const task = this.tasks.find(t => t.id === id)
    if(task) {
      task.completed = !task.completed
      this.setLocalStorage()
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
      }
    }
  }

}
