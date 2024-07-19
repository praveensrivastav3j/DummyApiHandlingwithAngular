import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient:HttpClient) { }

  GetallQuoteApi(){
    // https://dummyjson.com/quotes
    return this.httpClient.get(`${enviornment.baseUrl}/quotes`);
  }

    // https://dummyjson.com/quotes/random
    // generate random quote
    GetRandomQuoteApi(){
      return this.httpClient.get(`${enviornment.baseUrl}/quotes/random`);
    }

    // https://dummyjson.com/quotes/1
    getSingleQuoteApi(quoteId:string){
      return this.httpClient.get(`${enviornment.baseUrl}/quotes/${quoteId}`);
    }

}
