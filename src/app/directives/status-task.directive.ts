import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusTask]',
  standalone: true
})
export class StatusTaskDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @Input() set appStatusTask(completed: Boolean) {
    if(!completed) {
      this.render.setStyle(this.el.nativeElement, 'background-color', 'red')
    } else {
      this.render.setStyle(this.el.nativeElement, 'background-color', '')
    }
  }


}
