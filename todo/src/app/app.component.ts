import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'My Tasks';
  public todos: Todo[] = [];

  /**
   *
   */
  constructor() {
    this.todos.push(new Todo(1, "Feed Dog", false));
    this.todos.push(new Todo(2, "Gas", false));
    this.todos.push(new Todo(3, "Groceries", false));
    this.todos.push(new Todo(4, "Abe's gift", true));
  }
}
