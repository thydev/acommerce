import { HttpService } from './services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;
  sumQty = 0;
  cart = this._httpService.cart;
  subtotal: number;

  clicked = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.cart = this._httpService.cart;
    this._httpService.cartChange.subscribe(data => {
      this.cart = data;
      this.displayUserCart();
    });

    this.getUserInfo(this.loggedIn);
  }

  ngOnInit() {
    this.getUserInfo(this.loggedIn);
    this.calculateSubtotal();
  }
  close(reason: string) {
    this.sidenav.close();
  }

  displayUserCart() {
    let sum = 0;
    for (const i of this._httpService.cart) {
      sum += parseInt(i.qty, 10);
    }
    this.sumQty = sum;
    return this.sumQty;
  }

  getUserInfo(logged) {
    this.loggedIn = this._httpService.getUserLoggedIn();
    console.log(logged);
    console.log(this.loggedIn);
  }
  calculateSubtotal() {
    let total = 0;
    for (const i of this._httpService.cart) {
      total += i.qty * i.sellprice;
    }
    this.subtotal = total;
  }

  deleteFromCart(productObjectid: string) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]._id === productObjectid) {
        this.cart.splice(i, 1);
      }
    }
    this.calculateSubtotal();
    // Invoke the cart data to all subscribers
    this._httpService.updateCart();
  }

  updateQty(id: string, qty: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]._id === id) {
        this.cart[i].qty = qty;
        this.calculateSubtotal();
        // Invoke the cart data to all subscribers
        this._httpService.updateCart();
        break;
      }
    }
  }
}
