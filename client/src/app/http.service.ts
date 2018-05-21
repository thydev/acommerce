import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:5000/api/';

  constructor(private _http: HttpClient) {}

  getMessages() {
    return this._http.get(this.baseUrl + 'messages').toPromise();
  }
}
