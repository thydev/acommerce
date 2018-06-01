import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, startWith } from 'rxjs/operators';
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
  panelOpenState = false;
  productsResult: any;
  productCart = [];
  newproductCart = [];

  products = [
    {
      sellprice: 900,
      availableQuantity: 0,
      _id: '5b034d06540ca80bae3f3d23',
      name: 'Canon Black EOS Rebel SL1',
      imgUrlHead:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      imgUrl:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      description: 'best place to visit',
      keywords: 'Camping, rain, cloudy, cold, Korea, Seoul, Seoul',
      seller: '5b0341ce914da00957229ebb',
      createdAt: '2018-05-21T22:49:42.572Z',
      updatedAt: '2018-05-22T21:28:22.626Z',
      __v: 6,
      reviews: [
        {
          rating: 4,
          _id: '5b048b76d14ed6201923625d',
          name: 'Toto',
          description: 'Best ever',
          createdAt: '2018-05-22T21:28:22.625Z',
          updatedAt: '2018-05-22T21:28:22.625Z'
        }
      ]
    },
    {
      sellprice: 1200,
      availableQuantity: 0,
      _id: '5b034d06540ca80bae3f3d24',
      name: 'Canon Black EOS Rebel SL1',
      imgUrlHead:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      imgUrl:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      description: 'best place to visit',
      keywords: 'Swimming, rain, cloudy, cold, USA, washington, seattle',
      seller: '5b0341ce914da00957229ebb',
      createdAt: '2018-05-21T22:49:42.572Z',
      updatedAt: '2018-05-22T21:28:22.626Z',
      __v: 6,
      reviews: [
        {
          rating: 4,
          _id: '5b048b76d14ed6201923625d',
          name: 'Toto',
          description: 'Best ever',
          createdAt: '2018-05-22T21:28:22.625Z',
          updatedAt: '2018-05-22T21:28:22.625Z'
        }
      ]
    },
    {
      sellprice: 20,
      availableQuantity: 0,
      _id: '5b034d06540ca80bae3f3d25',
      name: 'Canon Black EOS Rebel SL1',
      imgUrlHead:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      imgUrl:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      description: 'best place to visit',
      keywords: 'Hiking, rain, cloudy, cold, Cambodia, new york',
      seller: '5b0341ce914da00957229ebb',
      createdAt: '2018-05-21T22:49:42.572Z',
      updatedAt: '2018-05-22T21:28:22.626Z',
      __v: 6,
      reviews: [
        {
          rating: 4,
          _id: '5b048b76d14ed6201923625d',
          name: 'Toto',
          description: 'Best ever',
          createdAt: '2018-05-22T21:28:22.625Z',
          updatedAt: '2018-05-22T21:28:22.625Z'
        }
      ]
    },
    {
      sellprice: 50,
      availableQuantity: 0,
      _id: '5b034d06540ca80bae3f3d26',
      name: 'Canon Black EOS Rebel SL1',
      imgUrlHead:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      imgUrl:
        'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg',
      description: 'best place to visit',
      keywords: 'landscape, rain, cloudy, cold, USA, seattle',
      seller: '5b0341ce914da00957229ebb',
      createdAt: '2018-05-21T22:49:42.572Z',
      updatedAt: '2018-05-22T21:28:22.626Z',
      __v: 6,
      reviews: [
        {
          rating: 4,
          _id: '5b048b76d14ed6201923625d',
          name: 'Toto',
          description: 'Best ever',
          createdAt: '2018-05-22T21:28:22.625Z',
          updatedAt: '2018-05-22T21:28:22.625Z'
        }
      ]
    }
  ];

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.filterProducts();
  }

  filterProducts(): void {
    const keywords = this._httpService.keywords;

    this.productsResult = this.products;
    if (this._httpService.keywords.country) {
      this.productsResult = this.productsResult.filter(option =>
        option.keywords
          .toLowerCase()
          .includes(keywords.country.toString().toLowerCase())
      );
    }
    if (this._httpService.keywords.city) {
      this.productsResult = this.productsResult.filter(option =>
        option.keywords
          .toLowerCase()
          .includes(keywords.city.toString().toLowerCase())
      );
    }
    if (this._httpService.keywords.activity) {
      this.productsResult = this.productsResult.filter(option =>
        option.keywords
          .toLowerCase()
          .includes(keywords.activity.toString().toLowerCase())
      );
    }

    if (this._httpService.keywords.lowprice >= 0) {
      this.productsResult = this.productsResult.filter(
        option => option.sellprice >= keywords.lowprice
      );
    }
    if (keywords.highprice > 0) {
      this.productsResult = this.productsResult.filter(
        x => x.sellprice <= keywords.highprice
      );
    }
  }

  //   onClick(id:string, price:number){
  //     console.log(this._httpService.addToCart(id, price), 'BEFORE BEFORE BEFORE');
  //     this._httpService.addToCart(id, price);
  //     console.log(this._httpService.addToCart(id, price), 'AFTER AFTER AFTFER');
  //   }

  onClick(productObject: any, subtotal: Number) {
    if (this._httpService.cart.length === 0) {
      productObject['qty'] = 1;
      productObject['price'] = productObject.sellprice;
      this._httpService.cart.push(productObject);
    } else {
      let exist = false;
      for (const i of this._httpService.cart) {
        if (i._id === productObject._id) {
          exist = true;
          i.qty += 1;
          break;
        }
      }
      // this._httpService.updateCart();

      // return this._httpService.cart;
      if (!exist) {
        productObject['qty'] = 1;
        productObject['price'] = productObject.sellprice;
        this._httpService.cart.push(productObject);
      }
    }
    return this._httpService.cart;
  }
}
