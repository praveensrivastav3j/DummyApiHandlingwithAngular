import { Component, inject } from '@angular/core';
import { PostsService } from '../../../core/service/posts/posts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrl: './userpost.component.css'
})
export class UserpostComponent {

  private postService = inject(PostsService);

  



  GetPostByUser(userId:string){

    this.postService.GetPostByUserApi(userId).subscribe({

      next:(response:any)=>{
        console.log(response);
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })

  }


}
