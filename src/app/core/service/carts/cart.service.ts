import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) {   }

  getCarts(){
    // 'https://dummyjson.com/carts'
    return this.httpClient.get(`${enviornment.baseUrl}/carts`);

  }
    // https://dummyjson.com/carts/add
    AddCartApi(cartsData: any) {
      return this.httpClient.post(`${enviornment.baseUrl}/carts/add`, cartsData);
    }


    // https://dummyjson.com/carts/1'
    DeleteCartsApi(userId:number){
      return this.httpClient.delete(`${enviornment.baseUrl}/carts/${userId}`);

    }

  
}
