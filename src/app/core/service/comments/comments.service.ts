import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  GetallCommentApi(){
    // 'https://dummyjson.com/comments'
    return this.httpClient.get(`${enviornment.baseUrl}/comments`)
  }

  AddCommentApi(CommentData:any){
    // https://dummyjson.com/posts/add
    return this.httpClient.post(`${enviornment.baseUrl}/comments/add`,CommentData);
  }

  GetSingleApi(commentId:string){
    // 'https://dummyjson.com/comments/1
    return this.httpClient.get(`${enviornment.baseUrl}/comments/${commentId}`);

  }

  UpdateCommentApi(CommentId:string,CommentData:any){
    return this.httpClient.put(`${enviornment.baseUrl}/posts/${CommentId}`,CommentData); 
  }

  DeleteCommentApi(deleteId:number){
    // https://dummyjson.com/comments/1
    return this.httpClient.delete(`${enviornment.baseUrl}/comments/${deleteId}`);
  }
}
