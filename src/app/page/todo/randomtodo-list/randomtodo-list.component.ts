import { Component, inject } from '@angular/core';
import { TODoService } from '../../../core/service/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-randomtodo-list',
  templateUrl: './randomtodo-list.component.html',
  styleUrl: './randomtodo-list.component.css'
})
export class RandomtodoListComponent {

  private todoService = inject(TODoService);
  todo:any = {};

  constructor(){
    // this.GetRandomTodo();
    setInterval(() => {
      this.GetRandomTodo(); 
      }, 4000);
  }

  GetRandomTodo(){

    this.todoService.GetRandomTodoApi().subscribe({
next:(response : any)=>{
  // console.log(response);
  this.todo = response;
  // console.log(this.todo);
  
  
},
error:(err:HttpErrorResponse)=>{
  console.log(err);
  
}
    });
  }

}
