import { Component, inject } from '@angular/core';
import { QuotesService } from '../../../core/service/quotes/quotes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrl: './quotes-list.component.css',
})
export class QuotesListComponent {
  private quoteService = inject(QuotesService);
  singleProductData: any = {};
  quoteData: any = [];
  quoteId = ''

  constructor() {
    this.GetallQuotes();
    this.GetSingleQuote();
  }

  GetallQuotes() {
    this.quoteService.GetallQuoteApi().subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.quotes && response.quotes.length) {
          this.quoteData = response.quotes;
          // console.log(this.quoteData);
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  GetSingleQuote(){
    this.quoteService.getSingleQuoteApi(this.quoteId).subscribe({
      next:(response:any)=>{
          // console.log(response);
          if(response && response.quotes && response.quotes.length){
            // console.log(response.quotes);
            // this.singleProductData = response.quote;  
            // console.log(this.singleProductData);
            
            
          }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }


    })
  }

  
}
