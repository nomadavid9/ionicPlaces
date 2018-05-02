import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  url_register: string = "http://localhost:3001/api/appUsers?";
  url_login: string = "http://localhost:3001/api/appUsers/login?";
  url_logout: string = "http://localhost:3001/api/appUsers/logout?";

  constructor(public http: HttpClient) {
  }

  loginUser(user){
    return this.http.post(this.url_login, user)
  }

  registerUser(user){
    return this.http.post(this.url_register, user)
  }

  logoutUser(){
    return this.http.post(this.url_logout, {});
  }
}
