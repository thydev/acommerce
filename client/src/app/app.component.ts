
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
  @ViewChild('sidenav') sidenav: MatSidenav;
  sumQty;
  cart = this._httpService.cart;
  subtotal: number;
  qty: number;
  clicked = false;
  constructor(private _httpService: HttpService,
    private _router: Router) {
      setInterval(()=> {this.displayUserCart();}, 1000);
  }

  ngOnInit() {
    this.calculateSubtotal();
  }

  close(reason: string) {
    this.sidenav.close();
  }
  
  displayUserCart(){
    let sum = 0;
    for(let i of this._httpService.cart){
      sum += i.qty;
    }
    this.sumQty = sum;
    return this.sumQty;
  }

    calculateSubtotal(){
      let total = 0;
      for(let i of this._httpService.cart){
        total += i.qty * i.price;
      }
      this.subtotal = total;
      console.log(this.subtotal);

    }


    deleteFromCart(productObjectid: string){
      for(let i =0; i<this.cart.length; i++){
        if(this.cart[i]._id === productObjectid){
          this.cart.splice(i, 1);
        }
      }
      this.calculateSubtotal();
    }

    updateQty(id:string){
      console.log("HIIIIIII")
      console.log('inside update function');
      for(let i =0; i<this.cart.length; i++){
        if(this.cart[i]._id === id){
          this.cart[i].qty = this.qty;
          console.log(this.cart[i].qty, 'new qty');
          this.calculateSubtotal();
          break;
        }
      }
    }


    getQty(id:string){
      for(let i =0; i<this.cart.length; i++){
        if(this.cart[i]._id === id){
          this.qty = this.cart[i].qty;
        }
      }
      return this.qty;
    }
}


