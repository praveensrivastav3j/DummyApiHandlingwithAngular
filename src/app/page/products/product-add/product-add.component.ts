import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/service/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productService = inject(ProductService);
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  ProductForm: FormGroup;
  singleProductData: any = {};
  productId = '';

  constructor(private formBuilder: FormBuilder) {
    this.ProductForm = formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      rating: [''],
      stock: [''],
    });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.productId = this.activatedRoute.snapshot.params['id'];
      this.GetSingleProductData();
    }
  }

  SubmitForm() {
    // console.log(this.ProductForm.value);
    if (this.ProductForm.valid) {
      if (this.productId) {
        //update product
        this.productService
          .updateProductApi(this.productId, this.ProductForm.value)
          .subscribe({
            next: (response: any) => {
              if (response) {
                console.log(response);
                this.ProductForm.reset();
                this.route.navigateByUrl('/product-list');
              }
            },
            error: (err: HttpErrorResponse) => {
              console.log(err);
            },
          });
      } else {
        // add product
        this.productService.addProductApi(this.ProductForm.value).subscribe({
          next: (response: any) => {
            // console.log(response);
            
            this.ProductForm.reset();
            this.route.navigateByUrl('/product-list');
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          },
        });
      }
    }
  }

  GetSingleProductData() {
    this.productService.getSingleDataApi(this.productId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response) {
          this.singleProductData = response;
          // console.log(this.singleProductData);
          this.ProductForm.patchValue({
            title: this.singleProductData.title,
            description: this.singleProductData.description,
            price: this.singleProductData.price,
            rating: this.singleProductData.rating,
            stock: this.singleProductData.stock,
            brand: this.singleProductData.brand,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  
}
