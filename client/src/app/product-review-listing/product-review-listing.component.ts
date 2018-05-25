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
  reviews = [{name: "Alex", rating: 2, review: "This product sucks", created_at: "4/20/2000"}, {name: "Jack", rating: 4, review: "No complaints here, always a great time", created_at: "4/20/2010"}, {name: "Joe", rating: 3, review: "Good and bad memories", created_at: "4/20/2008"}]
  constructor(
    // private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
