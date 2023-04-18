import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'My Tasks';
  public todos: Todo[] = [];
  public form: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      todo: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])]
    })
    this.load();
  }

  clear() {
    this.form.reset();
  }

  add() {
    const newTodo = this.form.controls['todo'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, newTodo, false));
    this.save();
    this.clear();
  }

  save() {
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data);
  }

  load() {
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  rename(todo: Todo) {
    todo.todo = " TEST name";
    this.save();
  }
}
