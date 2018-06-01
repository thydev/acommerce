import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocationSearchComponent } from '../location-search/location-search.component';
import { CountrysearchComponent } from '../countrysearch/countrysearch.component';
import { ActivitysearchComponent } from '../activitysearch/activitysearch.component';
import { ProductsearchComponent } from '../productsearch/productsearch.component';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  test: any = 3;
  country: String;
  city: String;
  activity: String;
  product: String;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog,
    private _httpService: HttpService
  ) {}

  ngOnInit() {}

  byCountry(): void {
    const dialogRef = this.dialog.open(CountrysearchComponent, {
      width: '250px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._router.navigate(['products']);
      }
    });
  }

  byActivity(): void {
    const dialogRef = this.dialog.open(ActivitysearchComponent, {
      width: '250px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._router.navigate(['products']);
      }
    });
  }

  byProduct(): void {
    const dialogRef = this.dialog.open(ProductsearchComponent, {
      width: '250px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._router.navigate(['products']);
      }
    });
  }

  onResize(event) {
    const element = event.target.innerWidth;
    // console.log(element);

    if (element < 950) {
      this.test = 2;
    }

    if (element > 950) {
      this.test = 3;
    }

    if (element < 750) {
      this.test = 1;
    }
  }
}
