import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel , FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpService } from '../http.service'
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
  newproductCart= [];

  products = [
    {
      'sellprice': 7,
      'availableQuantity': 0,
      '_id': '5b034d06540ca80bae3f3d23',
      'name': 'Beer',
      'imgUrlHead': "data:image/jpeg;base64,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",
      'imgUrl': "data:image/jpeg;base64,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",
      'description': 'best place to visit',
      'keywords': 'Camping, rain, cloudy, cold, Korea, Seoul, Seoul',
      'seller': '5b0341ce914da00957229ebb',
      'createdAt': '2018-05-21T22:49:42.572Z',
      'updatedAt': '2018-05-22T21:28:22.626Z',
      '__v': 6,
      'reviews': [
          {
              'rating': 4,
              '_id': '5b048b76d14ed6201923625d',
              'name': 'Toto',
              'description': 'Best ever',
              'createdAt': '2018-05-22T21:28:22.625Z',
              'updatedAt': '2018-05-22T21:28:22.625Z'
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
    "keywords": "Swimming, rain, cloudy, cold, USA, washington, seattle",
    "seller": "5b0341ce914da00957229ebb",
    "createdAt": "2018-05-21T22:49:42.572Z",
    "updatedAt": "2018-05-22T21:28:22.626Z",
    "__v": 6,
    "reviews": [
        {
            'rating': 4,
            '_id': '5b048b76d14ed6201923625d',
            'name': 'Toto',
            'description': 'Best ever',
            'createdAt': '2018-05-22T21:28:22.625Z',
            'updatedAt': '2018-05-22T21:28:22.625Z'
        }
    ]
},
{
  "sellprice": 20,
  "availableQuantity": 0,
  "_id": "5b034d06540ca80bae3f3d25",
  "name": "Canon Black EOS Rebel SL1",
  "imgUrlHead": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "imgUrl": "https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
  "description": "best place to visit",
  "keywords": "Hiking, rain, cloudy, cold, Cambodia, new york",
  "seller": "5b0341ce914da00957229ebb",
  "createdAt": "2018-05-21T22:49:42.572Z",
  "updatedAt": "2018-05-22T21:28:22.626Z",
  "__v": 6,
  "reviews": [
      {
          'rating': 4,
          '_id': '5b048b76d14ed6201923625d',
          'name': 'Toto',
          'description': 'Best ever',
          'createdAt': '2018-05-22T21:28:22.625Z',
          'updatedAt': '2018-05-22T21:28:22.625Z'
      }
  ]
},
{
  "sellprice": 50,
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
          'rating': 4,
          '_id': '5b048b76d14ed6201923625d',
          'name': 'Toto',
          'description': 'Best ever',
          'createdAt': '2018-05-22T21:28:22.625Z',
          'updatedAt': '2018-05-22T21:28:22.625Z'
      }
  ]
},
  ];


  constructor(private _httpService: HttpService) {
    // this.filterProducts();

  }

  ngOnInit() {
    this.filterProducts();
  }

    filterProducts(): void {
        console.log(this._httpService.keywords, 'why is this inconsistent');
        const keywords = this._httpService.keywords;
        // this._httpService.getKeywords().subscribe
        this.productsResult =  this.products;
        if (this._httpService.keywords.country) {
            this.productsResult = this.productsResult
                .filter(option => option.keywords.toLowerCase().includes(keywords.country.toString().toLowerCase()));
        }
        if (this._httpService.keywords.city) {
            this.productsResult = this.productsResult
                .filter(option => option.keywords.toLowerCase().includes(keywords.city.toString().toLowerCase()));
        }
        if (this._httpService.keywords.activity) {
            this.productsResult = this.productsResult
                .filter(option => option.keywords.toLowerCase().includes(keywords.activity.toString().toLowerCase()));
        }

        if (this._httpService.keywords.lowprice >= 0) {
            this.productsResult = this.productsResult
                .filter(option => option.sellprice >= keywords.lowprice);
        }
        if (keywords.highprice > 0 ) {
            this.productsResult = this.productsResult.filter(x => x.sellprice <= keywords.highprice);
        }
        console.log(this.productsResult);
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
        for (const i of this._httpService.cart)
        {
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
