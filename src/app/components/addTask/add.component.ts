import {  Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, NgForm, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true,
  imports: [
    // ... other imports
    FormsModule,
    ReactiveFormsModule,
  ],
})

export class AddComponent implements OnInit{

  constructor(private fb: FormBuilder) {

  }

  form!: FormGroup;

  ngOnInit(): void {
      this.form = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.maxLength(10)])
      })
  }

  sendTaskTitle() {
    if(this.form.valid) {
      console.log(this.form.value.title);
    }
  }


  numberTask: number = 10;
  titleTask: string = ""
  activeButton: boolean = true

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
