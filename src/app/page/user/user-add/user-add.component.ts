import { group } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../core/service/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  private userService = inject(UserService);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  UserId = '';
  singleUserData:any = {};
  UserForm:any = FormGroup;

  constructor(private formBuilder:FormBuilder){
this.UserForm = formBuilder.group({
  username : [''],
  firstName : [''],
  lastName : [''],
  age : [''],
  email : [''],
  phone : ['']

})
  }


  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.UserId = this.activatedRoute.snapshot.params['id'];
      this.GetSingleUserData();
    }
  }


  SubmitForm(){
    // console.log(this.UserForm.value);
    if(this.UserForm.valid){
      if(this.UserId){
        // update
        this.userService.updateUserApi(this.UserId, this.UserForm.value).subscribe({
            next: (response: any) => {
              if (response) {
                console.log(response);
                this.UserForm.reset();
                this.route.navigateByUrl('/user-list');
              }
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            },
          });
      }else{
        // submit
        this.userService.addUserApi(this.UserForm.value || '').subscribe({
    
          next:(response:any)=>{
            // console.log(response);
            if(response){
              this.UserForm.reset();
              this.route.navigateByUrl('/user-list');
            }
            },
            
          error:(err:HttpErrorResponse)=>{
            console.log(err);
            
          }
        });  
      }
    }
  }



  GetSingleUserData() {
    this.userService.getSingleDataApi(this.UserId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.singleUserData = response;
          // console.log(this.singleProductData);
          this.UserForm.patchValue({
            username: this.singleUserData.username,
            firstName: this.singleUserData.firstName,
            lastName: this.singleUserData.lastName,
            age: this.singleUserData.age,
            email: this.singleUserData.email,
            // phone: this.singleUserData.phone,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
