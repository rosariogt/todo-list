import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { Task } from './models/task.model';
import { TasksService } from './services/tasks.service';
import { ApiService } from './services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;
  cambio: boolean = false;
  tasks: Task[] = [
  ]
  taskUpload: Task[] = []
  private subscription!: Subscription;

  constructor(private service:TasksService, private serviceApi: ApiService) {
    this.subscription = this.service.taskChanged.subscribe(
      task => {
        this.tasks = task
      }
    )
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks()
    this.serviceApi.loadTask().subscribe(
      data => {
        if (Array.isArray(data)) {
          this.taskUpload = data
        }
      },
      error => {
        console.error("Error al cargar tareas desde la api")
      }
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
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
