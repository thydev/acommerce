import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel ,FormControl, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '../http.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {map, startWith} from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {
  panelOpenState: boolean = false;
  productsResult: any;
  products = [
    {
      "sellprice": 900,
      "availableQuantity": 0,
      "_id": "5b034d06540ca80bae3f3d23",
      "name": "Canon Black EOS Rebel SL1",
      "imgUrlHead": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
      "imgUrl": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
      "description": "best place to visit",
      "keywords": "camping, rain, cloudy, cold, Korea, washington, seoul",
      "seller": "5b0341ce914da00957229ebb",
      "createdAt": "2018-05-21T22:49:42.572Z",
      "updatedAt": "2018-05-22T21:28:22.626Z",
      "__v": 6,
      "reviews": [
          {
              "rating": 4,
              "_id": "5b048b76d14ed6201923625d",
              "name": "Toto",
              "description": "Best ever",
              "createdAt": "2018-05-22T21:28:22.625Z",
              "updatedAt": "2018-05-22T21:28:22.625Z"
          }
      ]
  },
  {
    "sellprice": 1200,
    "availableQuantity": 0,
    "_id": "5b034d06540ca80bae3f3d24",
    "name": "Canon Black EOS Rebel SL1",
    "imgUrlHead": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
    "imgUrl": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
    "description": "best place to visit",
    "keywords": "swimming, rain, cloudy, cold, USA, washington, seattle",
    "seller": "5b0341ce914da00957229ebb",
    "createdAt": "2018-05-21T22:49:42.572Z",
    "updatedAt": "2018-05-22T21:28:22.626Z",
    "__v": 6,
    "reviews": [
        {
            "rating": 4,
            "_id": "5b048b76d14ed6201923625d",
            "name": "Toto",
            "description": "Best ever",
            "createdAt": "2018-05-22T21:28:22.625Z",
            "updatedAt": "2018-05-22T21:28:22.625Z"
        }
    ]
},
{
  "sellprice": 0,
  "availableQuantity": 0,
  "_id": "5b034d06540ca80bae3f3d25",
  "name": "Canon Black EOS Rebel SL1",
  "imgUrlHead": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "imgUrl": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "description": "best place to visit",
  "keywords": "hiking, rain, cloudy, cold, Cambodia, new york",
  "seller": "5b0341ce914da00957229ebb",
  "createdAt": "2018-05-21T22:49:42.572Z",
  "updatedAt": "2018-05-22T21:28:22.626Z",
  "__v": 6,
  "reviews": [
      {
          "rating": 4,
          "_id": "5b048b76d14ed6201923625d",
          "name": "Toto",
          "description": "Best ever",
          "createdAt": "2018-05-22T21:28:22.625Z",
          "updatedAt": "2018-05-22T21:28:22.625Z"
      }
  ]
},
{
  "sellprice": 0,
  "availableQuantity": 0,
  "_id": "5b034d06540ca80bae3f3d26",
  "name": "Canon Black EOS Rebel SL1",
  "imgUrlHead": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "imgUrl": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "description": "best place to visit",
  "keywords": "landscape, rain, cloudy, cold, USA, seattle",
  "seller": "5b0341ce914da00957229ebb",
  "createdAt": "2018-05-21T22:49:42.572Z",
  "updatedAt": "2018-05-22T21:28:22.626Z",
  "__v": 6,
  "reviews": [
      {
          "rating": 4,
          "_id": "5b048b76d14ed6201923625d",
          "name": "Toto",
          "description": "Best ever",
          "createdAt": "2018-05-22T21:28:22.625Z",
          "updatedAt": "2018-05-22T21:28:22.625Z"
      }
  ]
},
  ];


  constructor(private _httpservice: HttpService) { 
    this.productsResult = this.products;
  }

  ngOnInit() {
  }

  filterProducts(keywords: any): void {
    console.log(keywords, "why is this inconsistent");
    this.productsResult =  this.products
         .filter(option => option.keywords.toLowerCase().includes(keywords.country.toLowerCase()))
         .filter(option => option.keywords.toLowerCase().includes(keywords.city.toLowerCase()))
         .filter(option => option.keywords.toLowerCase().includes(keywords.activity.toLowerCase()))
         .filter(option => option.sellprice >= keywords.lowprice)
         .filter(option => option.sellprice <= keywords.highprice)
         ;
      console.log(this.productsResult);
  }

//   onClick(id:string, price:number){
//     console.log(this._httpservice.addToCart(id, price), 'BEFORE BEFORE BEFORE');
//     this._httpservice.addToCart(id, price);
//     console.log(this._httpservice.addToCart(id, price), 'AFTER AFTER AFTFER');
//   }

  onClick(id: string, price: number){
    if(this._httpservice.cart.length == 0){
      console.log("empty array");
      this._httpservice.cart.push({product: id, qty: 1, price: price});
  } 
  else{
      let exist = false;
      for(let i of this._httpservice.cart){
          console.log("i", i);
          console.log("i.product", i.product);
          console.log("Id", id);
          if(i.product == id){
              exist = true;
              console.log(i.product);
              i.qty += 1;
              console.log("product is the same");
              break;
          }
      }
      if(!exist){
        this._httpservice.cart.push({product: id, qty: 1, price: price});
          console.log('ELSE STATEMENT');
      }
  }
  console.log(this._httpservice.cart, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  return this._httpservice.cart;
  }
}
