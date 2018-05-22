import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-search',
  templateUrl: './price-search.component.html',
  styleUrls: ['./price-search.component.css']
})
export class PriceSearchComponent implements OnInit {
  //Generate Values and Thumbtracking
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    
    if (value >= 900) {
      return Math.round(value / 900) + 'k';
    }
  
    return value;
  }

  constructor() { }

  ngOnInit() {
  }

}
