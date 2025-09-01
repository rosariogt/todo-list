import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true,
  imports: [
    // ... other imports
    FormsModule
  ],
})

export class AddComponent {

  numberTask: number = 10;
  titleTask: string = ""
  activeButton: boolean = true

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
