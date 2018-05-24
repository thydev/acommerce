import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private config: Config;

  constructor(
    private _http: HttpClient,
    private _configServie: ConfigService
  ) {
    this.getConfig();
  }

  getConfig() {
    this._configServie.getConfig().subscribe(((data: Config) => {
      this.config = data;
    }));
  }

  getAll() {
    return this._http.get(this.config.baseUrl + this.config.sellerUrl);
  }

  getSellerProducts() {
    return this._http.get(this.config.baseUrl + this.config.productUrl);
    // by seller id
    // return this._http.get(this.config.baseUrl + this.config.productUrl + '/5b0341ce914da00957229ebb');
  }

  createSeller(item: any) {
    return this._http.post(this.config.baseUrl + this.config.sellerUrl, item);
  }

  // Temporarily add anonymouse seller
  createProduct(item: any) {
    return this._http.post(this.config.baseUrl + '5b0341ce914da00957229ebb/' + this.config.productUrl, item);
  }

}
