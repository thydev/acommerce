import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  createUser(user){
    console.log(user);
    return this._http.post('/api/users', user);
  }
  loginUser(user){
    console.log(user.email);
    return this._http.get('/api/users/'+ user.email)
  }
}
