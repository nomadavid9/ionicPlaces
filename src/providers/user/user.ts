import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  base_url: string = "http://localhost:3000/api/appUsers";
  userId: string;

  constructor(public http: HttpClient) {
  }

  loginUser(user){
    return this.http.post(this.base_url + "/login?", user)
  }

  registerUser(user){
    return this.http.post(this.base_url + "?", user)
  }

  logoutUser(){
    return this.http.post(this.base_url + "/logout?", {});
  }

  addToFaves(place: any){
    return this.http.post(this.base_url + "/" + sessionStorage.userId + "/places?" + "access_token=" + sessionStorage.token, place)
  }

  getFaves(){
    return this.http.get(this.base_url + "/" + sessionStorage.userId + "/places?" + "access_token=" + sessionStorage.token) 
  }
}
