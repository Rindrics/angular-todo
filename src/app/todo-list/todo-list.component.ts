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
}
