import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
name: "work",
pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCatState = args[0];
    if(desiredCatState === "Work") {
      return input.filter((task) => {
        return task.work;
      });
    } else if (desiredCatState === "notDone") {
      return input.filter((task) => {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
