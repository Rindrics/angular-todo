import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  items = ['item1', 'item2', 'item3']

  ngOnInit(): void {
  }

  addTodo(todo:string): void {
    this.items.push(todo);
  }

  removeTodo(todo:string): void {
    let idx = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == todo) {
        idx = i;
      }
    }
    if (idx != -1) {
      this.items.splice(idx, 1);
    }
  }
}
