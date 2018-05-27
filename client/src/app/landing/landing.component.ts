import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

declare var test: any;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user;
  f() {
    test();
  }
  constructor(private _router: Router,
    private _route: ActivatedRoute) {
      // this.f();
    }

  ngOnInit() {
  }
  productPage() {
    this._router.navigate(['/productmain']);

  }
}
