import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})

export class LocationSearchComponent implements OnInit {
  @Output() filterChange = new EventEmitter();

  countryControl: FormControl = new FormControl();
  cityControl: FormControl = new FormControl();
  activityControl: FormControl = new FormControl();

  countryOptions: Observable<string[]>;
  cityOption: Observable<string[]>;
  activityOption: Observable<string[]>;

  cityOptions: string;
  activityOptions: string;
  productresults: any;

  // values for the country dropdown //
  countryArray = ['USA', 'Korea', 'Ukraine', 'Cambodia', 'Mexico', 'Philippines'];
  cityArray = ['Seattle', 'New York', 'Seoul'];
  activeArray = ['Hiking', 'Swimming', 'Camping'];

constructor(
    private _httpService: HttpService
) { }

  ngOnInit() {
    this.initOptionValues();
  }

  initOptionValues() {
    this.countryOptions = this.countryControl.valueChanges
      .pipe(startWith(''),
        map(val => this.filter(val)));

    this.cityOption = this.cityControl.valueChanges
    .pipe(startWith(''),
      map(cityval => this.cityfilter(cityval)));

    this.activityOption = this.activityControl.valueChanges
    .pipe(startWith(''),
      map(actival => this.activefilter(actival)));

    if (this._httpService.keywords.country) {
        this.countryControl.setValue(this._httpService.keywords.country);
    }
    if (this._httpService.keywords.city) {
      this.cityControl.setValue(this._httpService.keywords.city);
    }
    if (this._httpService.keywords.activity) {
      this.activityControl.setValue(this._httpService.keywords.activity);
    }
  }

  filter(val: string): string[] {
    return this.countryArray.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  cityfilter(cityval: string): string[] {
    return this.cityArray.filter(cities => cities.toLowerCase().includes(cityval.toLowerCase()));
  }

  activefilter(actival: string): string[] {
    return this.activeArray.filter(activities => activities.toLowerCase().includes(actival.toLowerCase()));
  }

  countryChange($event) {

    this._httpService.keywords.country = $event;
    this.buildFilter();
  }

  cityChange($event) {

    this._httpService.keywords.city = $event;
    this.buildFilter();
  }

  activityChange($event) {

    this._httpService.keywords.activity = $event;
    this.buildFilter();
  }

  onLowPriceChange($event) {
    if (!isNaN($event)) {
      this._httpService.keywords.lowprice = $event;
      this.buildFilter();
    }
  }

  onHighPriceChange($event) {

    if (!isNaN($event)) {
      this._httpService.keywords.highprice = $event;
      this.buildFilter();
    }
  }

  buildFilter() {
    this.filterChange.emit();
  }

}
