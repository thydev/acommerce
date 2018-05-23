import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getUser(email){
    return this._http.get('/user/'+ email);
  }

  
}
