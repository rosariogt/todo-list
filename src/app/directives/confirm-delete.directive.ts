import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConfirmDelete]',
  standalone: true
})
export class ConfirmDeleteDirective {

  @Input('appConfirmDelete') taskTitle: String = ""

  constructor(){

  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault()
    event.stopPropagation()

    const confirmed = confirm('Esta seguro de eliminas la tarea' + this.taskTitle)
    if(confirmed) {
      alert("eliminado")
    }
  }
}
