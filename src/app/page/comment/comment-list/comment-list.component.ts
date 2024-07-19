import { Component, inject } from '@angular/core';
import { CommentsService } from '../../../core/service/comments/comments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent {

  private commentService = inject(CommentsService);
  private route = inject(Router)

  commentData:any = [];

  constructor(){
    this.GetallComments();
  }

  GetallComments(){

    this.commentService.GetallCommentApi().subscribe({
      next:(response:any)=>{
        // console.log(response);
        if (response && response.comments && response.comments.length) {
          this.commentData = response.comments;
          // console.log(this.commentData);
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })
  }

  UpdateComment(updateId:number){
    this.route.navigateByUrl(`/addComment-update/${updateId}`);


  }



  DeleteComment(deleteId:number){
    this.commentService.DeleteCommentApi(deleteId).subscribe({
      next:(response:any)=>{
        // console.log(response); 
        if(response){
          this.GetallComments();
        }     
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })


  }
}
