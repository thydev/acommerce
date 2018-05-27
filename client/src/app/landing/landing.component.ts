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
      if(params['id'] != null){
        this._httpService.setUserLoggedIn();
      }
    });   
    this.getUserInfo();
  }
  productPage() {
    this._router.navigate(['/productmain']);

  }

  getUserInfo(){
    this.loggedIn = this._httpService.getUserLoggedIn();
    if(this.loggedIn){
      this.UserLoggedIn.emit(this.loggedIn);
    }
  }

}
