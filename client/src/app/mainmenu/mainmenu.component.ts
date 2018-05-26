import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LocationSearchComponent } from '../location-search/location-search.component';
import { CountrysearchComponent } from '../countrysearch/countrysearch.component';
import { ActivitysearchComponent } from '../activitysearch/activitysearch.component';
import { ProductsearchComponent } from '../productsearch/productsearch.component';
import { HttpService } from '../http.service';

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

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog,
    private _httpService: HttpService) { }

  ngOnInit() {
  }

  byCountry(): void {
    let dialogRef = this.dialog.open(CountrysearchComponent, {
      width: '250px',
      height: '300px',
      data: {country: this.country, city: this.city}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this._httpService.keywords.country = result;
      // this._httpService.keywords.city = result;
      console.log(this._httpService.keywords);
      console.log('go to product main');
      this._router.navigate(['products']);
      this._httpService.keywords.country = result;
      this._httpService.keywords.city = result;
      if(result != null){
        this._router.navigate(['products']);
      }
    });
  }

  byActivity():void{
    let dialogRef = this.dialog.open(ActivitysearchComponent, {
      width: '250px',
      height: '300px',
      data: {activity: this.activity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.activity = result;
      this._httpService.keywords.activity = result;
      if(result != null){
        this._router.navigate(['products']);
      }
    });
  }

  byProduct():void{
    let dialogRef = this.dialog.open(ProductsearchComponent, {
      width: '250px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this._httpService.keywords.product = result;
      console.log('The dialog was closed');
      if(result != null){
        this._router.navigate(['products']);
      }
    });
  }

  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);


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
