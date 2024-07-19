import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentsService } from '../../../core/service/comments/comments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-commment',
  templateUrl: './add-commment.component.html',
  styleUrl: './add-commment.component.css',
})
export class AddCommmentComponent {
  CommentForm: any = [FormGroup];
  private commentService = inject(CommentsService);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  commentId = '';
  singleData: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.CommentForm = formBuilder.group({
      body: [''],
      userId: [1],
      postId: [1],
    });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.commentId = this.activatedRoute.snapshot.params['id'];
      this.GetSingleData();
    }
  }

  SubmitForm() {
    // console.log(this.CommentForm.value);
    if (this.CommentForm.valid) {
      if (this.commentId) {
        // update

        this.commentService.UpdateCommentApi(this.commentId, this.CommentForm.value).subscribe({
            next: (response: any) => {
              if (response) {
                // console.log(response);
                this.CommentForm.reset();
                this.route.navigateByUrl('/comment-list');
              }
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            },
          });
      } else {
        // submit

        this.commentService.AddCommentApi(this.CommentForm.value).subscribe({
          next: (response) => {
            // console.log(response);
            if (response) {
              console.log(response);
              this.CommentForm = '';
              this.route.navigateByUrl('/comment-list');
            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          },
        });
      }
    }
  }

  GetSingleData() {
    this.commentService.GetSingleApi(this.commentId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.singleData = response;
          // console.log(this.singleProductData);
          this.CommentForm.patchValue({
            body: this.singleData.body,
            userId: this.singleData.user.id,
            postId: this.singleData.postId,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
