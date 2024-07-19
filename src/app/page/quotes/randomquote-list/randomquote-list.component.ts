import { Component, inject } from '@angular/core';
import { QuotesService } from '../../../core/service/quotes/quotes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-randomquote-list',
  templateUrl: './randomquote-list.component.html',
  styleUrl: './randomquote-list.component.css'
})
export class RandomquoteListComponent {

  private quoteService = inject(QuotesService);
  randomQuote:any = {} ;
  quoteId = '';

  constructor(){
    // this.GetRandomQuote();
    setInterval(() => {
      this.GetRandomQuote(); 
      }, 4000);
  }

  GetRandomQuote(){
    this.quoteService.GetRandomQuoteApi().subscribe({
      next:(response:any)=>{
        // console.log(response);
        if(response){
         this.randomQuote = response;
          // console.log(this.randomQuote);
               
        }  
      },
      error:(err:HttpErrorResponse)=>{
      console.log(err);

      }
    })
  }

 



}
