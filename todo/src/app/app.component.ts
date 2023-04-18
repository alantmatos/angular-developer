import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'My Tasks';
  public todos: any[] = [];

  /**
   *
   */
  constructor() {
    this.todos.push('get gas');
    this.todos.push('brush the dog');
    this.todos.push('wash hair');    
  }
}
