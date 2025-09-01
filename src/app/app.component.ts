import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {

  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;

  updateValue(): void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    }, 1000)
  }

  ngDoCheck(): void {
    if (this.value !== this.previousValue) {
      this.changesDetected = true;
      this.previousValue = this.value
    }
  }

/*   ngAfterViewInit(): void {
    console.log("Han sido inicializadps la vista del componente y la vista de los hijos");
  }

  title = 'todo-list'; */

/*   isDestroyed: boolean = true;
  countDown: number;
  intervalID: any;

  constructor(){
    this.countDown = 10;
    this.intervalID = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalID)
        this.isDestroyed = false
      }
    }, 1000)
  } */
}
