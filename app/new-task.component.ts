import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select class="filter" #newPriority>
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
      <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewTaskComponent {

  public onSubmitNewTask: EventEmitter<Task>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement) {
    var newTask: Task = new Task(userDescription.value, userPriority.value, 0);
    // console.log(newTask);
    this.onSubmitNewTask.emit(newTask);
    newTask = "";

  }
}
