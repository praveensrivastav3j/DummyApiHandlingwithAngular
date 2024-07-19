import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }


  getallPostApi(){
    // https://dummyjson.com/posts
    return this.httpClient.get(`${enviornment.baseUrl}/posts`);
  }

  SearchPostApi(searchValue:string){
    // https://dummyjson.com/posts/search?q=love
    return this.httpClient.get(`${enviornment.baseUrl}/posts/search?q=${searchValue}`);
  }

  GetPostByUserApi(userId:string){
    // https://dummyjson.com/posts/user/5
return this.httpClient.get(`${enviornment.baseUrl}/posts/user/${userId}`);
  }

  GetCommentsFromPost(postId:string){
    // https://dummyjson.com/posts/1/comments
    return this.httpClient.get(`${enviornment.baseUrl}/posts/${postId}/comments`);
  }

  
AddPostApi(PostData:any){
  // https://dummyjson.com/posts/add
  return this.httpClient.post(`${enviornment.baseUrl}/posts/add`,PostData);
}

GetSingleApi(postId:string){
  // https://dummyjson.com/posts
  return this.httpClient.get(`${enviornment.baseUrl}/posts/${postId}`);
}

UpdatePostApi(prdouctid:string,productdata:any){
  return this.httpClient.put(`${enviornment.baseUrl}/posts/${prdouctid}`,productdata);

}


  DeletePostApi(postsId:number){
    // https://dummyjson.com/posts/1
    return this.httpClient.delete(`${enviornment.baseUrl}/posts/${postsId}`);
  }
}
