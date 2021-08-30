import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(param: any) {
    let url = "https://jsonplaceholder.typicode.com/posts";
    if(!param.editMode){
      return this.http.post(url, param); // for new user post method is being triggered
    }
    else {
      return this.http.put(url, param+"/param.name"); // for existing user put method is being triggered
    }
    
  }
  /* 
   below code is commneted as the get api is not giving expected response.All the four apis(
  /posts/1/comments
  /albums/1/photos
  /users/1/albums
  /users/1/todos
  /users/1/posts)
  are not giving expected response 

    fetchUser(){
      let url ="https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url);
    }
  */
}
