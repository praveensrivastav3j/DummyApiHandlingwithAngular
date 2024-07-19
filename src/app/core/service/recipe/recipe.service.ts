import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient:HttpClient) { }

  getallRecipe(){
    // https://dummyjson.com/recipes
   return this.httpClient.get(`${enviornment.baseUrl}/recipe`);

  }

  getallRecipeByTagApi(){
    // 'https://dummyjson.com/recipes/tags'
   return this.httpClient.get(`${enviornment.baseUrl}/recipes/tags`);
  }

  getRecipeTagApi(tagId:string){
    // 'https://dummyjson.com/recipes/tag/Pakistani'
    return this.httpClient.get(`${enviornment.baseUrl}/recipes/tag/${tagId}`);
  }

  searchRecipeApi(searchValue:string){
    // 'https://dummyjson.com/recipes/search?q=Margherita'
    return this.httpClient.get(`${enviornment.baseUrl}/recipes/search?q=${searchValue}`);
  }

  getRecipeByMealTypeApi(mealType:string){
    // https://dummyjson.com/recipes/meal-type/snack
  return this.httpClient.get(`${enviornment.baseUrl}/recipes/meal-type/${mealType}`);
  }
}
