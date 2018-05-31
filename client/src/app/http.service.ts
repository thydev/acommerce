import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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
  };

  name: any;
  // EventEmitter should not be used this way - only for `@Output()`s
  // nameChange: EventEmitter<string> = new EventEmitter<string>();
  nameChange: Subject<string> = new Subject<string>();

  cartChange: Subject<any> = new Subject<any>();
  currentUser = false;

  change() {
    // this.name = 'Jane';
    this.nameChange.next(this.name);
  }

  updateCart() {
    this.cartChange.next(this.cart);
  }

  constructor(private _http: HttpClient) {
    this.name = 'Jack';
  }

  getKeywords() {
    return this.keywords;
  }

  createUser(user) {
    console.log(user);
    return this._http.post('/api/users', user);
  }
  loginUser(user) {
    console.log(user.email);
    return this._http.get('/api/users/' + user.email);
  }

  setUserLoggedIn() {
    this.currentUser = true;
  }

  getUserLoggedIn() {
    return this.currentUser;
  }

  getAllProducts() {
    return this._http.get('/products');
  }
}
