import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../../../core/service/posts/posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css',
})
export class PostAddComponent {
  PostForm: any = [FormGroup];
  private postService = inject(PostsService);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  postId = '';
  singleData:any = {};

  constructor(private formBuilder: FormBuilder) {
    this.PostForm = formBuilder.group({
      title: [''],
      caption: [''],
      userId: [1],
    });
  }


  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.postId = this.activatedRoute.snapshot.params['id'];
      this.GetSingleData();
    }
  }


  SubmitForm() {
    // this.PostForm.patchValue({
    //   userId : new Date().getTime(),
    // });
    console.log(this.PostForm.value);

    if (this.PostForm.valid) {
      if (this.postId) {
        //update product
        this.postService
          .UpdatePostApi(this.postId, this.PostForm.value)
          .subscribe({
            next: (response: any) => {
              if (response) {
                console.log(response);
                this.PostForm.reset();
                this.route.navigateByUrl('/post-list');
              }
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            },
          });
    }else {
      // add product
      this.postService.AddPostApi(this.PostForm.value).subscribe({
        next: (response: any) => {
          // console.log(response); 
          this.PostForm.reset();
          this.route.navigateByUrl('/post-list');
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
    }
  }
}

  GetSingleData() {
    this.postService.GetSingleApi(this.postId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.singleData = response;
          // console.log(this.singleProductData);
          this.PostForm.patchValue({
            title: this.singleData.title,
            userId: this.singleData.userId,
            caption: this.singleData.body,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
