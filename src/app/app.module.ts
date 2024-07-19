import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './page/products/product-list/product-list.component';
import { HeaderComponent } from './page/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './page/products/product-add/product-add.component';
import { CartsListComponent } from './page/carts/carts-list/carts-list.component';
import { RecipesListComponent } from './page/recipes/recipes-list/recipes-list.component';
import { ToDoListComponent } from './page/todo/to-do-list/to-do-list.component';
import { PostsListComponent } from './page/posts/posts-list/posts-list.component';
import { CommentListComponent } from './page/comment/comment-list/comment-list.component';
import { QuotesListComponent } from './page/quotes/quotes-list/quotes-list.component';
import { RandomquoteListComponent } from './page/quotes/randomquote-list/randomquote-list.component';
import { RandomtodoListComponent } from './page/todo/randomtodo-list/randomtodo-list.component';
import { AddCartsComponent } from './page/carts/add-carts/add-carts.component';
import { UserpostComponent } from './page/posts/userpost/userpost.component';
import { PostAddComponent } from './page/posts/post-add/post-add.component';
import { AddTodoComponent } from './page/todo/add-todo/add-todo.component';
import { AddCommmentComponent } from './page/comment/add-commment/add-commment.component';
import { UserListComponent } from './page/user/user-list/user-list.component';
import { UserAddComponent } from './page/user/user-add/user-add.component';
import { SideBarComponent } from './page/side-bar/side-bar.component';
import { UserLoginComponent } from './page/Login/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductAddComponent,
    CartsListComponent,
    RecipesListComponent,
    ToDoListComponent,
    PostsListComponent,
    CommentListComponent,
    QuotesListComponent,
    RandomquoteListComponent,
    RandomtodoListComponent,
    AddCartsComponent,
    UserpostComponent,
    PostAddComponent,
    AddTodoComponent,
    AddCommmentComponent,
    UserListComponent,
    UserAddComponent,
    SideBarComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
