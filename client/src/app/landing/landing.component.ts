import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../http.service';

declare var test: any;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() UserLoggedIn = new EventEmitter();
  loggedIn: boolean;
  user;
  f() {
    test();
  }
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.user = params['id'];
      if (params['id'] != null) {
        this._httpService.setUserLoggedIn();
      }
    });
    this.getUserInfo();
    this.storeRoute();
  }
  productPage(){
    this._router.navigate(['/products']);

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

  getUserInfo() {
    this.loggedIn = this._httpService.getUserLoggedIn();
    if (this.loggedIn) {
      this.UserLoggedIn.emit(this.loggedIn);
    }
  }

}
