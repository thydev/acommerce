import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-review-details',
  templateUrl: './product-review-details.component.html',
  styleUrls: ['./product-review-details.component.css']
})
export class ProductReviewDetailsComponent implements OnInit {
  productCart = [];
  newproductCart = [];
  quantity: number;
  reviews: number;
  avgrating: any;
  product = {
    _id: '5b034d06540ca80bae3f3d23',
    name: 'Beer',
    sellprice: 7,
    availableQuantity: 0,
    image: '/assets/download.jpeg',
    imgUrl: '/assets/download.jpeg',
    description: 'Cold and delicious',
    reviews: [
      {
        name: 'Javier',
        rating: 3,
        review: 'This product sucks',
        created_at: '4/20/2000'
      },
      {
        name: 'Jack',
        rating: 4,
        review: 'This product is good',
        created_at: '4/20/2010'
      },
      {
        name: 'Joe',
        rating: 3,
        review: 'This product is okay',
        created_at: '4/20/2008'
      }
    ]
  };
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAvgRating();
  }
  getProductFromService() {}
  getAvgRating() {
    var totalratings = 0;
    this.reviews = this.product.reviews.length;
    for (let x = 0; x < this.product.reviews.length; x++) {
      totalratings += this.product.reviews[x]['rating'];
    }
    this.avgrating = (totalratings / this.reviews).toFixed(2);
  }
  addProductToCart() {
    if (this._httpService.cart.length === 0) {
      this.product['qty'] = 1;
      this.product['price'] = this.product.sellprice;
      this._httpService.cart.push(this.product);
    } else {
      let exist = false;
      for (const i of this._httpService.cart) {
        if (i._id === this.product._id) {
          exist = true;
          i.qty += 1;
          break;
        }
      }
      if (!exist) {
        this.product['qty'] = 1;
        this.product['price'] = this.product.sellprice;
        this._httpService.cart.push(this.product);
      }
    }
    return this._httpService.cart;
  }
}
