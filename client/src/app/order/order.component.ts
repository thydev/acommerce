import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(
    // private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  date = new Date();

  ngOnInit() {
  }
  getCartInfo(){

  }

}
