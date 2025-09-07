import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { Task } from './models/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;
  cambio: boolean = false;
  tasks: Task[] = [
  ]

  constructor(private service:TasksService) {

  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks()
  }

  addTask(task: Task):void {
    this.service.addTask(task)
  }

  markTaskCompleted(task: Task) {
    this.service.completeTask(task.id)
  }

  deleteTask(id: number) {
    this.service.deleteTask(id)
  }

  updateValue(): void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    }, 1000)
  }

}
