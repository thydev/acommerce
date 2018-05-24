import { Component, OnInit, OnChanges } from '@angular/core';

import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

import { MatDialog, MatDialogClose } from '@angular/material';

import { SellerService } from '../services/seller.service';
import { SellerNewComponent } from '../seller-new/seller-new.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


  products = [
    {name: 'Mouse', price: 232, keyword: 'Hardware, computer, accessory'},
    {name: 'Keyboard', price: 23, keyword: 'Hardware, computer, accessory, what more'},
  ]

  results$: Observable<any>;
  results: any;

  constructor(
    private _sellerService: SellerService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  newSeller() {
    const dialogRef = this.dialog.open(SellerNewComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  filterProduct(keyword: string) {

    this.results = this.products.filter(x => x.name === keyword);
    const squareOdd2 = of(this.products);
    const pfilter = pipe(
      filter(x => x['price'] > 50),
      map(n => n)
    );
    this.results$ = pfilter(of(this.products));

    console.log(keyword);
    // Subscribe to get values
    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );
    console.log(squareOdd);
    console.log(this.results$);
    squareOdd.subscribe(x => console.log(x));
    // squareOdd2.subscribe(x => console.log(x));
    this.results$.subscribe(x => {
      console.log(x);
    })
  }

  getSellers() {
    this._sellerService.getAll().subscribe(data => {
      console.log(data);
    });
  }

  getProducts() {
    this._sellerService.getSellerProducts().subscribe(data => {
      console.log(data);
    })
  }

}
