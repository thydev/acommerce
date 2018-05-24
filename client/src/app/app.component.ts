
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
  cart = this.displayUserCart();
  constructor(private _httpService: HttpService,
    private _router: Router) {
      setInterval(()=> {this.displayUserCart();}, 1000);
  }

  ngOnInit() {

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
}


