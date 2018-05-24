import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel ,FormControl, ReactiveFormsModule} from '@angular/forms';
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
  keywords = {
    country: '',
    city: '',
    activity: '',
    lowprice: 0,
    highprice:99990
  }
  //values for the country dropdown//
  countryArray =['USA', 'Korea', 'Ukraine', 'Cambodia', 'Mexico', 'Philippines'];
  cityArray =['Seattle', 'New York', 'Seoul'];
  activeArray =['Hiking', 'Swimming', 'Camping'];

  constructor() {
  }

  ngOnInit() {
    this.countryOptions = this.countryControl.valueChanges
      .pipe(startWith(''),
        map(val => this.filter(val)));
    
    this.cityOption = this.cityControl.valueChanges
    .pipe(startWith(''),
      map(cityval => this.cityfilter(cityval))); 
    
    this.activityOption = this.activityControl.valueChanges
    .pipe(startWith(''),
      map(actival => this.activefilter(actival))); 
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

  countryChange($event){
    console.log($event,"Event");
    this.keywords.country = $event;
    this.buildFilter();
  }

  cityChange($event){
    console.log($event,"Event");
    this.keywords.city = $event;
    this.buildFilter();
  }

  activityChange($event){
    console.log($event,"Event");
    this.keywords.activity = $event;
    this.buildFilter();
  }

  buildFilter() {
    this.filterChange.emit(this.keywords);
  }
   
}
