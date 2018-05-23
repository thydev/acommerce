import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private _http: HttpClient) {

  }

  getConfig() {
    return this._http.get<Config>(this.configUrl);
  }

}
