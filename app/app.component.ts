import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <div class="container">
    <h1>To-Do List</h1>
    <task-list
      [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
    </task-list>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[];  //Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks  = [
      new Task("Create To-Do List app.", "High", 0),
      new Task("Learn Kung Fu.", "Normal", 1),
      new Task("Rewatch all the Lord of the Rings movies.", "Low", 2),
      new Task("Do the laundry.", "Normal", 3)
      ];
  }
  taskWasSelected(clickedTask: Task): void {
  }
}
