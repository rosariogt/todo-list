import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgClass, NgStyle } from '@angular/common';
import { ConfirmDeleteDirective } from '../../directives/confirm-delete.directive';
import { StatusTaskDirective } from '../../directives/status-task.directive';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [
     NgStyle,
     NgClass,
    StatusTaskDirective,
    ConfirmDeleteDirective
  ],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {

  @Input('listTask') tasks: Task[] = []
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskDelete: EventEmitter<number> = new EventEmitter<number>();

  completedTask(task: Task): void {
    this.taskCompleted.emit(task);
  }

  deleteTask(id: number) {
    this.taskDelete.emit(id)
  }

}
