import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RecipeService } from '../../../core/service/recipe/recipe.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent {
  private recipesService = inject(RecipeService);
  recipeData: any = [];
  allRecipe: any = [];
  SelectedTag = '';
  recipeSearch = new FormControl('');
  mealsType = new FormControl('');
  allMeal: any = [];
  SelectedMealType: any = '';
  meal = '';

  constructor() {
    this.recipeSearch.valueChanges.pipe(debounceTime(750)).subscribe(() => {
      this.SearchRecipe();

      // this.userData.push(this.userForm.value);
    });
  }

  ngOnInit() {
    this.GetallRecipes();
    this.GetallRecipeByTag();
    // this.GetRecipeByMeal();
  }

  GetallRecipes() {
    this.recipesService.getallRecipe().subscribe({
      next: (response: any) => {
        // console.log(response);

        // console.log(response.recipes);
        if (response && response.recipes && response.recipes.length) {
          this.recipeData = response.recipes;
          // this.allMeal = response.recipes.mealType;
          // console.log(this.recipeData);

          // for all Meal
          for (var i: any = 0; i < this.recipeData.length; i++) {
            // console.log(this.recipeData[i].hasOwnProperty('mealType'));
            // var mealType =
            if (this.recipeData[i].mealType != undefined) {
              for (
                var j: any = 0;
                j < this.recipeData[i].mealType.length;
                j++
              ) {
                if (!this.allMeal.includes(this.recipeData[i].mealType[j])) {
                  this.allMeal.push(this.recipeData[i].mealType[j]);
                }
                // console.log(this.recipeData[i].mealType[j]);
                // console.log(this.allMeal);
              }
            }

            // this.allMeal.push(this.recipeData.mealType);
            // console.log(this.allMeal);
          }
        } else {
          this.recipeData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  GetallRecipeByTag() {
    this.recipesService.getallRecipeByTagApi().subscribe({
      next: (response: any) => {
        // console.log(response);
        this.allRecipe = response;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  GetRecipeTag(recipeId: string) {
    this.SelectedTag = recipeId;
    // console.log(this.SelectedTag);
    this.recipesService.getRecipeTagApi(recipeId).subscribe({
      next: (response: any) => {
        // console.log(response);
        if (response && response.recipes && response.recipes.length) {
          this.recipeData = response.recipes;
          // console.log(this.recipeData);
        } else {
          this.recipeData = [];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  ClearTag() {
    this.SelectedTag = '';
    this.GetallRecipes();
  }

  SearchRecipe() {
    this.recipesService
      .searchRecipeApi(this.recipeSearch.value || '')
      .subscribe({
        next: (response: any) => {
          // console.log(response);
          if (response && response.recipes && response.recipes.length) {
            this.recipeData = response.recipes;
            // console.log(this.recipeData);
          } else {
            this.recipeData = [];
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }

  GetRecipeByMeal() {
    console.log(this.mealsType.value);
    if (this.mealsType.value == '') {
      this.GetallRecipes();
    }else{
    this.recipesService
      .getRecipeByMealTypeApi(this.mealsType.value || '')
      .subscribe({
        next: (response: any) => {
          // console.log(response);
          if (response && response.recipes && response.recipes.length) {
            this.recipeData = response.recipes;
            // console.log(this.recipeData);
          } else {
            this.recipeData = [];
          }
          // this.allMeal = response;
          // console.log(this.allMeal);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
    }
  }
}
