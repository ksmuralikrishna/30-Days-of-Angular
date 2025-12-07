import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo {
  tasks: string[] = [];
  newTask:string = '';

  addTask(){
    this.tasks.push(this.newTask);
    this.newTask = '';

  }
  removeTask(index:number){
    this.tasks.splice(index, 1);
  }
}
