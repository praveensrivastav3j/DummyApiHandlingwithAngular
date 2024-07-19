import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './page/products/product-list/product-list.component';
import { ProductAddComponent } from './page/products/product-add/product-add.component';
import { CartsListComponent } from './page/carts/carts-list/carts-list.component';
import { RecipesListComponent } from './page/recipes/recipes-list/recipes-list.component';
import { ToDoListComponent } from './page/todo/to-do-list/to-do-list.component';
import { PostsListComponent } from './page/posts/posts-list/posts-list.component';
import { CommentListComponent } from './page/comment/comment-list/comment-list.component';
import { QuotesListComponent } from './page/quotes/quotes-list/quotes-list.component';
import { RandomquoteListComponent } from './page/quotes/randomquote-list/randomquote-list.component';
import { RandomtodoListComponent } from './page/todo/randomtodo-list/randomtodo-list.component';
import { UserpostComponent } from './page/posts/userpost/userpost.component';
import { PostAddComponent } from './page/posts/post-add/post-add.component';
import { AddTodoComponent } from './page/todo/add-todo/add-todo.component';
import { AddCommmentComponent } from './page/comment/add-commment/add-commment.component';
import { UserListComponent } from './page/user/user-list/user-list.component';
import { UserAddComponent } from './page/user/user-add/user-add.component';
import { AddCartsComponent } from './page/carts/add-carts/add-carts.component';
import { UserLoginComponent } from './page/Login/user-login/user-login.component';

const routes: Routes = [
  // products route
  {path:'product-list' , component: ProductListComponent},
  {path:'product-add' , component: ProductAddComponent},
  {path:'product-update/:id' , component: ProductAddComponent},
  
  // carts route
  {path:'card-list' , component: CartsListComponent},
  {path:'add-cart', component:AddCartsComponent},

// recipes route
  {path:'recipes-list' , component: RecipesListComponent},
  
  // todo route
  {path:'todo-list' , component: ToDoListComponent},
  {path:'randomtodo-list' , component: RandomtodoListComponent},
  {path:'addTodo-list' , component: AddTodoComponent},
  {path:'todo-update/:id' , component:AddTodoComponent},

  
  // PostsApi route
  {path:'post-list' , component: PostsListComponent},
  {path:'UserPost-list' , component: UserpostComponent},
  {path:'post-add' , component:PostAddComponent},
  {path:'post-update/:id' , component:PostAddComponent},


  // comments api route
  {path:'comment-list' , component: CommentListComponent},
  {path:'addComment-list' , component: AddCommmentComponent},
  {path:'addComment-update/:id' , component:AddCommmentComponent},

  
  // quotes api route
  {path:'quote-list' , component: QuotesListComponent},
  {path:'randomquote-list' , component: RandomquoteListComponent},


  // user route
  {path: 'user-list', component: UserListComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-update/:id', component: UserAddComponent},

  // user Login
  {path: 'User-login', component: UserLoginComponent},

  {path:'', redirectTo:'User-login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
