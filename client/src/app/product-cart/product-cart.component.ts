import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {


  handler: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_4QecyqPaZY78qGroYMbRUrYF',
      locale: 'auto',
      token:  (token: any) => {
        console.log('***** token is here ', token);
        // let observable = this._httpService.getToken(token.id);      //change _httpService
        // observable.subscribe(data => {
        //   console.log(data);
        // })
        console.log(this);
      },
      opened: function() {
        console.log("Form opened");
      },
      closed: function() {
        console.log("Form closed");
      }
    });
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


  openCheckout() {
    this.handler.open({
      name: 'Wanderlust',
      description: 'goggles',
      amount: 2000
    });
  }
}

//this method should be in the service.ts file
// getToken(token:string){
//   console.log('token function ');
//   return this._http.post('/url', {token});
// }
