import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TODoService } from '../../../core/service/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  private todoService = inject(TODoService);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  TodoForm : any = [FormGroup];
  todoId = '';
  singleData : any = {};


  constructor(private formBuilder:FormBuilder){
    this.TodoForm = formBuilder.group({

      todo : [''],
      userId: [1],
      completed:[false]
    })
  }


  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.todoId = this.activatedRoute.snapshot.params['id'];
      this.GetSingleData();
    }
  
  }
  SubmitForm(){
    // console.log(this.TodoForm.value);
    if(this.TodoForm.valid){

      if(this.todoId){
        // update
        this.todoService.UpdateTodoApi(this.todoId, this.TodoForm.value).subscribe({
          next: (response: any) => {
            if (response) {
              // console.log(response);
              this.TodoForm.reset();
              this.route.navigateByUrl('/todo-list');
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          },
        });




      }else{

        this.todoService.AddToDoApi(this.TodoForm.value).subscribe({
          next:(response:any)=>{
            // console.log(response);
            if(response){
              this.TodoForm = '';
             this.route.navigateByUrl('/todo-list');
            }
    
          },
          error:(err:HttpErrorResponse)=>{
            console.log(err);
    
          }
  
        });
      }

    }  
  }

  

  GetSingleData() {
    this.todoService.GetSingleApi(this.todoId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.singleData = response;
          // console.log(this.singleProductData);
          this.TodoForm.patchValue({
            todo: this.singleData.todo,
            userId: this.singleData.userId,
            completed: this.singleData.completed,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
