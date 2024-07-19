import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/service/carts/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-carts',
  templateUrl: './add-carts.component.html',
  styleUrl: './add-carts.component.css'
})
export class AddCartsComponent {
  private cartKey = 'CartKey123';
  private cartService = inject(CartService);
  private router = inject(Router);
  product_id = '';

  cartsProductsList: any = [];
  cartData:any = [];
  totalPrice:any = 0 ;

  ngOnInit() {
    if (localStorage.getItem(this.cartKey)) {
      this.cartsProductsList = JSON.parse(
        localStorage.getItem(this.cartKey) || ''
      );
    }
// console.log(this.cartsProductsList);
// console.log(t);
this.TotalPrice();


  }


TotalPrice(){
this.totalPrice= 0;
  for(let i=0; i<this.cartsProductsList.length; i++){

    // console.log(this.cartsProductsList[i].hasOwnProperty('price'));
    // console.log(this.cartsProductsList[i].price);  
    if(this.cartsProductsList[i].price){
      this.totalPrice+=this.cartsProductsList[i].price;  
      }
        
    }
    // console.log(this.totalPrice);
}







  SaveCart() {
    let cart = {
      userId: 1,
      products: [],
    };

    let products: any = [];
    this.cartsProductsList.forEach((element: any) => {
      products.push({
        id: element.id,
        quantity: 1,
      });
    });

    cart.products = products;

    // console.log(cart.products);
    this.cartService.AddCartApi(cart).subscribe({
      next: (response: any) => {
        console.log(response);

        // if(response){
        //   // this.router.navigateByUrl('/product-list');
        // }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }



  RemoveProductCart(product_id: string){
    let index = this.cartsProductsList.findIndex((x: any) => x.id === product_id);
    if (index >-1) {
      this.cartsProductsList.splice(index, 1);
      // console.log(this.cartsProductsList);
      localStorage.setItem(this.cartKey, JSON.stringify(this.cartsProductsList));
      this.TotalPrice();
  }
  }

}

