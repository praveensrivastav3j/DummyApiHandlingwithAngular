import { Component, Inject, inject } from '@angular/core';
import { ProductService } from '../../../core/service/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productData: any = [];
  categorylist: any = [];
  selectedCat = '';
  productsearch = new FormControl('');
   cartProducts: any = [];

  

  // productId = '';

  private productservice = inject(ProductService);
  private route = inject(Router);
  private cartKey = 'CartKey123';

  // constructor(private productservice: ProductService) {}

  constructor() {
    this.productsearch.valueChanges.pipe(debounceTime(750)).subscribe(() => {
      this.SearchData();
    });
  }

  ngOnInit() {
    this.GetProducts();
    this.GetCategory();
    if (localStorage.getItem(this.cartKey)) {
      this.cartProducts = JSON.parse(localStorage.getItem(this.cartKey) || '');
    }
  }

  GetProducts() {
    this.productservice.getProductApi().subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.products && response.products.length) {
          this.productData = response.products;
          // console.log(this.productData);
        } else {
          this.productData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  // get Category

  GetCategory() {
    this.productservice.getCategory().subscribe({
      next: (response: any) => {
        // console.log(response)
        if (response && response.length) {
          this.categorylist = response;
          // console.log(this.categorylist);
        } else {
          this.categorylist = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  // get product Category
  GetProductOfCategory(cat: any) {
    this.selectedCat = cat;
    this.productservice.getProductCategory(cat).subscribe({
      next: (response: any) => {
        if (response && response.products && response.products.length) {
          this.productData = response.products;
          // console.log(this.productData);
        } else {
          this.productData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  ClearCat() {
    (this.selectedCat = ''), this.GetProducts();
  }

  // serach data

  SearchData() {
    // console.log(this.productsearch.value);

    this.productservice.SearchApi(this.productsearch.value || '').subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.products && response.products.length) {
          this.productData = response.products;
          // console.log(this.productData);
        } else {
          this.productData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
    
  }


// Add to cart

AddCart(product:any){
  if (localStorage.getItem(this.cartKey)) {
    this.cartProducts = JSON.parse(localStorage.getItem(this.cartKey) || '');
  }
  this.cartProducts.push(product);
  // console.log(cartProducts);
  localStorage.setItem(this.cartKey, JSON.stringify(this.cartProducts));
}




// update product api
  UpdateProductData(product_id: string) {
    // console.log(product_id);
    this.route.navigateByUrl(`/product-update/${product_id}`);
  }

  // delete product Api
  DeleteProductData(prdouct_id: number) {
    // console.log(prdouct_id);
    this.productservice.deleteProductApi(prdouct_id).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          // console.log(response);
          this.GetProducts();
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
