import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProductApi(){

    return this.httpClient.get(`${enviornment.baseUrl}/products`);
  }


  // https://dummyjson.com/products/search?q=phone'
  SearchApi(SearchValue:string){
    return this.httpClient.get(`${enviornment.baseUrl}/products/search?q=${SearchValue}`);
  }


  // https://dummyjson.com/products/categories
 getCategory(){

return this.httpClient.get(`${enviornment.baseUrl}/products/categories`);
}

  // https://dummyjson.com/products/category/smartphones'
  getProductCategory(category:string){
    return this.httpClient.get(
      `${enviornment.baseUrl}/products/category/${category}`
    );

  }
  // getProductCategory(category:string){
  //   return this.httpClient.get(
  //     `${enviornment.baseUrl}/products/category/${category}`
  //   );

  // }


  // add product
  // https://dummyjson.com/products/add'
  addProductApi(ProductData:any){
    return this.httpClient.post(`${enviornment.baseUrl}/products/add`,ProductData);
  }

  // update product
  // 'https://dummyjson.com/products/1
  updateProductApi(prdouctid:string,productdata:any){
    return this.httpClient.put(`${enviornment.baseUrl}/products/${prdouctid}`,productdata);
  }

  // single product data
  
// ('https://dummyjson.com/products/1')
getSingleDataApi(productId:string){
  return this.httpClient.get(`${enviornment.baseUrl}/products/${productId}`);
}

// delete product data
// https://dummyjson.com/products/1
deleteProductApi(productId:number){
  return this.httpClient.delete(`${enviornment.baseUrl}/products/${productId}`);

}
}
 