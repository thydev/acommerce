import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.storeRoute();
  }
  storeRoute(){
    let route = ""
    for(let i = 0; i<this._route.url['value'].length; i++){
      route += this._route.url['value'][i]['path'];
      route += "/";
      console.log(this._route.url['value'][i]['path']);
    }
    console.log(route);
    this._httpService.prevRoute = route;
  }

}
