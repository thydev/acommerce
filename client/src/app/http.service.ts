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
  constructor (private _http: HttpClient) { }

  getKeywords() {
    return this.keywords;
  }
}
