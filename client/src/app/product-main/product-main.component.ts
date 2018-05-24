import { Component, OnInit } from '@angular/core';
import { NgModel , FormControl, ReactiveFormsModule} from '@angular/forms';
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
  panelOpenState = false;
  productsResult: any;
  products = [
    {
      'sellprice': 900,
      'availableQuantity': 0,
      '_id': '5b034d06540ca80bae3f3d23',
      'name': 'Canon Black EOS Rebel SL1',
      'imgUrlHead': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
      'imgUrl': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
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
    'sellprice': 1200,
    'availableQuantity': 0,
    '_id': '5b034d06540ca80bae3f3d23',
    'name': 'Canon Black EOS Rebel SL1',
    'imgUrlHead': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
    'imgUrl': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
    'description': 'best place to visit',
    'keywords': 'Swimming, rain, cloudy, cold, USA, washington, seattle',
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
  'sellprice': 0,
  'availableQuantity': 0,
  '_id': '5b034d06540ca80bae3f3d23',
  'name': 'Canon Black EOS Rebel SL1',
  'imgUrlHead': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
  'imgUrl': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
  'description': 'best place to visit',
  'keywords': 'Hiking, rain, cloudy, cold, Cambodia, new york',
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
  'sellprice': 0,
  'availableQuantity': 0,
  '_id': '5b034d06540ca80bae3f3d23',
  'name': 'Canon Black EOS Rebel SL1',
  'imgUrlHead': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
  'imgUrl': 'https://i5.walmartimages.com/asr/155babc0-37af-4ef7-911d-33d08d1829a8_1.6cd8e941fe4186ed7cfca4219e4a7ded.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
  'description': 'best place to visit',
  'keywords': 'landscape, rain, cloudy, cold, USA, seattle',
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
  ];

  constructor() {
    this.productsResult = this.products;
  }

  ngOnInit() {
  }

  filterProducts(keywords: any): void {
    console.log(keywords, 'why is this inconsistent');
    this.productsResult =  this.products
         .filter(option => option.keywords.toLowerCase().includes(keywords.country.toLowerCase()))
         .filter(option => option.keywords.toLowerCase().includes(keywords.city.toLowerCase()))
         .filter(option => option.keywords.toLowerCase().includes(keywords.activity.toLowerCase()))
         .filter(option => option.sellprice >= keywords.lowprice)
         .filter(option => option.sellprice <= keywords.highprice)
         ;
      console.log(this.productsResult);
  }

}
