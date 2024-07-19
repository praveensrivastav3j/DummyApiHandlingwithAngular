import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { enviornment } from '../../../../enviornment/enviornment';
import { AuthService } from '../../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  LoginForm: FormGroup ;

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private formBuilder:FormBuilder){

    this.LoginForm = formBuilder.group({

      username: [''],
      password: ['']

    })
  }

  SubmitForm(){

    // console.log(this.LoginForm.value);
    // debugger
    this.authService.Login(this.LoginForm.value).subscribe({
      next: (response: any) => {
        if (response) {
          if (response.token) {
            localStorage.setItem(enviornment.tokenKey, response.token);
          }
          localStorage.setItem(enviornment.userDataKey, JSON.stringify(response));
          this.LoginForm.reset();
          this.router.navigateByUrl('/product-list');
        }
      },
      error: (error: HttpErrorResponse) => {
        document.write('error :>>  Unmatched Credentials please Enter Valid Credentials ');
      },
    });
  }
    
  }


