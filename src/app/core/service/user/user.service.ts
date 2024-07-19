import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {


   }

   GetAllUserApi(){
    // https://dummyjson.com/users
    return this.httpClient.get(`${enviornment.baseUrl}/users`);
   }


   SearchUserApi(SearchUser:any){
    // https://dummyjson.com/users/search?q=John
    return this.httpClient.get(`${enviornment.baseUrl}/users/search?q=${SearchUser}`);
   }

   FilterUserApi(type:any,UserValue:any){
    // https://dummyjson.com/users/filter?key=hair.color&value=Brown
    return this.httpClient.get(`${enviornment.baseUrl}/users/filter?key=${type}&value=${UserValue}`);
   }

// add user
   addUserApi(UserData:any){
    return this.httpClient.post(`${enviornment.baseUrl}/users/add`,UserData);
  }

    // single product data
  
// ('https://dummyjson.com/products/1')
getSingleDataApi(UserId:string){
  return this.httpClient.get(`${enviornment.baseUrl}/users/${UserId}`);
}

// update data
updateUserApi(userId:string,userData:any){
  return this.httpClient.put(`${enviornment.baseUrl}/users/${userId}`,userData);
}

   DeleteUserApi(userId:any){
    // https://dummyjson.com/users/1
    return this.httpClient.delete(`${enviornment.baseUrl}/users/${userId}`);
   }
}
