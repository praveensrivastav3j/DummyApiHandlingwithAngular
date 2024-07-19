import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  private userService = inject(UserService);
  private route = inject(Router);
  UserData: any = [];
  type = '';
  UserValue = '';
  userKey: any = [];
  filterValuesArray: any = [];
  // filterKey = '';

  userSearch = new FormControl('');
  filterValue = new FormControl('');
  filterKey = new FormControl('');

  constructor() {
    this.userSearch.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.SearchUser();
    });

    // this.FilterUser();

    this.GetallUser();
  }
  GetallUser() {
    this.userService.GetAllUserApi().subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.users && response.users.length) {
          this.UserData = response.users;
          this.userKey = Object.keys(this.UserData[0]);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  SearchUser() {
    this.userService.SearchUserApi(this.userSearch.value || '').subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.users && response.users.length) {
          this.UserData = response.users;
          // console.log(this.productData);
        } else {
          this.UserData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  GetFilterValues() {
    this.filterValuesArray = [];
    // console.log('key :>> ', key);
    // this.filterKey = key;
    this.UserData.forEach((element: any) => {
      this.filterValuesArray.push(element[this.filterKey.value || '']);
    });
  }

  FilterUser() {
    this.userService.FilterUserApi(this.filterKey.value, this.filterValue.value).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.users && response.users.length) {
          this.UserData = response.users;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  clearfilter(){
    // this.filterKey='',
    this.filterKey.setValue('');

    this.filterValue.setValue('');
    this.filterValuesArray=[];
    this.GetallUser();

  }

  UpdateUserData(UserId: string) {
    this.route.navigateByUrl(`/user-update/${UserId}`);
  }

  DeleteUserData(UserId: number) {
    this.userService.DeleteUserApi(UserId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.GetallUser();
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
