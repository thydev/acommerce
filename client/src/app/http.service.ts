import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cart = [];
  constructor(private _http:HttpClient) { }
  keyword={
    country:'',
    city:'',
    activity:'',
    product:''
  }
}
