import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/service/products/product.service';
import { CartService } from '../../../core/service/carts/cart.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrl: './carts-list.component.css'
})
export class CartsListComponent {

 private cartsService = inject(CartService);

cartData:any = [];
user_id = ''

ngOnInit(){

  this.GetAllCarts();
}

 GetAllCarts(){

  this.cartsService.getCarts().subscribe({
    next:(response:any)=>{
    // console.log(response.carts);
    if (response && response.carts && response.carts.length) {
      this.cartData = response.carts;
      // console.log(this.cartData);
    } else {
      this.cartData = [];
    }

    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
      
    }
  })
 }

DeleteCarts(user_id:number){
  this.cartsService.DeleteCartsApi(user_id).subscribe({
next:(response):any=>{
  console.log(response);
},
error:(err:HttpErrorResponse)=>{
  console.log(err);
  
}
  })
 }

}
