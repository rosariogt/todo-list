import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-addTask',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true
})

export class AddComponent implements OnDestroy, AfterContentInit {

  ngAfterContentInit(): void {
    console.log("El contenido ha sido inicializado");

  }

  ngOnDestroy(): void {
    console.log("Componente ha sido destruido");
  }

/*   constructor() {
    console.log("Creqandose desde el contructor")
  }

  ngOnInit(): void {
    console.log("Creqandose desde on init ");

  }
 */

}
