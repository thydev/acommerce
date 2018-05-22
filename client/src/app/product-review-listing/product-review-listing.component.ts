import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-product-review-listing',
  templateUrl: './product-review-listing.component.html',
  styleUrls: ['./product-review-listing.component.css']
})
export class ProductReviewListingComponent implements OnInit {
  //sort reviews by newest
  reviews = [{name: "Javier", rating: 2, review: "This product sucks", created_at: "4/20/2000"}, {name: "Jack", rating: 4, review: "This product is good", created_at: "4/20/2010"}, {name: "Shithead", rating: 3, review: "This product is okay", created_at: "4/20/2008"}]
  constructor(
    // private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
