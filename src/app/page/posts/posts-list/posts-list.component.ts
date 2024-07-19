import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { PostsService } from '../../../core/service/posts/posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  private postsService = inject(PostsService);
  private route = inject(Router);
  postsData: any = [];
  userData: any = [];
  postSearch = new FormControl('');
  postId = '';
  user_Id = '';
  commentShow = false;
  commentData: any = [];
  // constructor(private renderer:Renderer) {}

  constructor() {
    this.GetallPosts();
    this.postSearch.valueChanges.pipe(debounceTime(750)).subscribe(() => {
      this.SearchPosts();
    });
  }

  GetallPosts() {
    this.postsService.getallPostApi().subscribe({
      next: (response: any) => {
        this.postsData = [];
        // console.log(response);
        if (response && response.posts && response.posts.length) {
          this.postsData = response.posts;
          // console.log(this.postsData);
        } else {
          this.postsData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  SearchPosts() {
    this.postsService.SearchPostApi(this.postSearch.value || '').subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.posts && response.posts.length) {
          this.postsData = response.posts;
          // console.log(this.postsData);
        } else {
          this.postsData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  UpdatePosts(postId:string){
      // console.log(product_id);
      this.route.navigateByUrl(`/post-update/${postId}`);
  

  }

  DeletePosts(postId: number) {
    this.postsService.DeletePostApi(postId).subscribe({
      next: (response: any) => {
        if(response){
          this.GetallPosts();
        }
        // console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  GetPostByUser(userId: string) {
    this.user_Id = userId;
    this.postsService.GetPostByUserApi(userId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.posts && response.posts.length) {
          this.userData = response.posts;
          console.log(this.userData);
        } else {
          this.userData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  BackToPostList(){
    this.user_Id = ''
    this.GetallPosts();
  }

  // @ViewChild('overlay').this.div:ElementRef;

  GetComments(postId: any) {
    this.commentData = [];
    this.postId = postId;
    this.postsService.GetCommentsFromPost(postId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.comments && response.comments.length) {
          this.commentShow = true;
          this.commentData = response.comments;
          console.log(this.commentData);

          //   this.commentData = [];
          //   let postId=0;
          //   for(var i=0; i<response.comments.length; i++){
          //     this.html+='<p>'+  response.comments[i].body +'</p>';
          //     postId=response.comments[i].postId
          //   }
          // // let prof = document.getElementById('cmnt-'+postId);
          // console.log(this.html);

          // document.getElementById('cmnt-'+postId).html(this.html);
          //console.log(overlay);
          // console.log(this.commentData);
          // this.flag=true;
        } else {
          this.commentData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
