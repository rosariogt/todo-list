import {  Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, NgForm, ReactiveFormsModule } from "@angular/forms";
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true,
  imports: [
    // ... other imports
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgStyle
],
})

export class AddComponent implements OnInit{

  constructor(private fb: FormBuilder) {

  }

  isActive: boolean = true;
  form!: FormGroup;
  taskActive!: Boolean;

  ngOnInit(): void {
      this.form = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.maxLength(10)])
      })
  }

  sendTaskTitle() {
    if(this.form.valid && this.form.get('title')?.value !== '') {
      this.taskActive = true;
      console.log(this.form.value.title);
    } else {
      this.taskActive = false;
    }
  }

  numberTask: number = 14;
  titleTask: string = ""
  activeButton: boolean = true
  tasks: any[] = ['tarea1', 'tarea2', 'tarea3']

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

}
