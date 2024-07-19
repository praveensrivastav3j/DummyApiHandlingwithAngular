import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class TODoService {

  constructor(private httpClient:HttpClient) { }

  GetallToDoApi(){
    // https://dummyjson.com/todos
return this.httpClient.get(`${enviornment.baseUrl}/todos`);
  }

  GetRandomTodoApi(){
    https://dummyjson.com/todos/random
   return this.httpClient.get(`${enviornment.baseUrl}/todos/random`);
  }


  AddToDoApi(TodoData:any){
    // https://dummyjson.com/posts/add
    return this.httpClient.post(`${enviornment.baseUrl}/todos/add`,TodoData);
  }

  GetSingleApi(todoId:string){
    // 'https://dummyjson.com/todos/1
    return this.httpClient.get(`${enviornment.baseUrl}/todos/${todoId}`);

  }

  // https://dummyjson.com/todos/1
  UpdateTodoApi(TodoId:string,TodoData:any){
    return this.httpClient.put(`${enviornment.baseUrl}/posts/${TodoId}`,TodoData); 
  }


  DeleteTodoApi(TodoId:number){
    // https://dummyjson.com/posts/1
    return this.httpClient.delete(`${enviornment.baseUrl}/todos/${TodoId}`);
  }
  
}
