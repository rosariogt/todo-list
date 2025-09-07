import {  Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, NgForm, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Task } from "../../models/task.model";
import { StatusTaskDirective } from "../../directives/status-task.directive";
import { ConfirmDeleteDirective } from "../../directives/confirm-delete.directive";

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [
    // ... other imports
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    StatusTaskDirective,
    ConfirmDeleteDirective
],
})

export class AddComponent implements OnInit{

  constructor(private fb: FormBuilder) {

  }

  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>()

  numberTasks!: number
  isActive: boolean = true;
  form!: FormGroup;
  taskActive!: Boolean;

  tasks: Task[] = [
    {
      id: 1,
      title: "Tarea 1",
      completed: false
    },
    {
      id: 2,
      title: "Tarea 2",
      completed: false
    },
    {
      id: 3,
      title: "Tarea 3",
      completed: false
    },
    {
      id: 4,
      title: "Tarea 4",
      completed: false
    },
    {
      id: 5,
      title: "Tarea 5",
      completed: false
    },
    {
      id: 6,
      title: "Tarea 6",
      completed: false
    },
    {
      id: 7,
      title: "Tarea 7",
      completed: false
    },
    {
      id: 8,
      title: "Tarea 8",
      completed: false
    },
    {
      id: 9,
      title: "Tarea 9",
      completed: false
    }
  ]

  ngOnInit(): void {
      this.form = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.maxLength(10)])
      })
  }

  sendTaskTitle() {
    if(this.form.valid && this.form.get('title')?.value !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        title: this.form.value.title,
        completed: false
      };
      this.taskAdded.emit(newTask);
      this.form.reset();
      this.taskActive = true;
      console.log(this.form.value.title);
    } else {
      this.taskActive = false;
    }
  }

  numberTask: number = 14;
  titleTask: string = ""
  activeButton: boolean = true
  //tasks: any[] = ['tarea1', 'tarea2', 'tarea3']

  sendData(form: NgForm) {
    if(form.valid) {
      console.log(this.titleTask);
    }
  }

  sendTask() {
    const sizeTitleTask = this.titleTask.split('')
    if(sizeTitleTask.length > 0) {
      this.activeButton = false
    } else {
      this.activeButton = true
    }
    console.log(`Tarea enviada con exito ${this.titleTask}`);

  }

  markTaskCompleted(task: Task) {
    task.completed = !task.completed
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
    this.numberTasks = this.tasks.length
  }
}
