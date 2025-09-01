import {  Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";

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

export class AddComponent {

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
