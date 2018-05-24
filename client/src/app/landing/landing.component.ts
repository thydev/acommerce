import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user;
  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }
  productPage(){
    this._router.navigate(['/products/1']);

  }
}
