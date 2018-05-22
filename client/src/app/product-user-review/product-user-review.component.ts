import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'


@Component({
  selector: 'app-product-user-review',
  templateUrl: './product-user-review.component.html',
  styleUrls: ['./product-user-review.component.css']
})
export class ProductUserReviewComponent implements OnInit {
  review = {name: "", rating: 0, review: ""}
  loggedin = false;
  rating: number;
  constructor(
    // private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  createRating(){
    console.log(this.rating);
    console.log(this.review.review)
  }
}
