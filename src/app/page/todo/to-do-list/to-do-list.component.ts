import { Component, inject } from '@angular/core';
import { TODoService } from '../../../core/service/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  private todoService = inject(TODoService);
  private route = inject(Router);
  toDoData: any = [];
  TodoId = '';



  constructor() {
    this.GetallToDo();
  }
  GetallToDo() {
    this.todoService.GetallToDoApi().subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.todos && response.todos.length) {
          this.toDoData = response.todos;
          // console.log(this.toDoData);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }



  UpdateTodo(TodoId:number){
    this.route.navigateByUrl(`/todo-update/${TodoId}`);

  }

  DeleteTodo(TodoId:number){

    this.todoService.DeleteTodoApi(TodoId).subscribe({
      next:(response:any)=>{
        // console.log(response); 
        if(response){
          this.GetallToDo();
        }     
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })


  }
}
