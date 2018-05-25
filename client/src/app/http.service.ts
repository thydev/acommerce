import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cart = [];
  keywords = {
    country: '',
    city: '',
    activity: '',
    product: '',
    lowprice: 0,
    highprice: 0
  }

  currentUser = false;
  constructor (private _http: HttpClient) { }

  getKeywords() {
    return this.keywords;
  }

  createUser(user){
    console.log(user);
    return this._http.post('/api/users', user);
  }
  loginUser(user){
    console.log(user.email);
    return this._http.get('/api/users/'+ user.email)
  }

  setUserLoggedIn(){
    this.currentUser = true;
  }

  getUserLoggedIn(){
    return this.currentUser;
  }
}
