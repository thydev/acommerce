
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Component, ViewChild, OnInit } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  magicnumber = '20';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sumQty;
  cart = this.displayUserCart();
  constructor(private _httpService: HttpService,
    private _router: Router) {
      // setInterval(() => { this.displayUserCart(); }, 1000);
      this.magicnumber = this._httpService.name;
      this._httpService.nameChange.subscribe((value) => {
        this.magicnumber = value;
      });

      this.cart = this._httpService.cart;
      this._httpService.cartChange.subscribe((data) => {
        this.cart = data;
        this.magicnumber = data;
      });
  }

  ngOnInit() {

  }

  close(reason: string) {
    this.sidenav.close();
  }

  displayUserCart() {
    let sum = 0;
    for (const i of this._httpService.cart){
      sum += i.qty;
    }
    this.sumQty = sum;
    return this.sumQty;
  }
}


