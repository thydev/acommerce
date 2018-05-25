
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-countrysearch',
  templateUrl: './countrysearch.component.html',
  styleUrls: ['./countrysearch.component.css']
})
export class CountrysearchComponent implements OnInit {
  @Output() filterChange = new EventEmitter();

  countryControl: FormControl = new FormControl();
  cityControl: FormControl = new FormControl();

  countryOptions: Observable<string[]>;
  cityOption: Observable<string[]>;
 
  cityOptions: string;
  productresults: any;
  keywords = {
    country: '',
    city: '',
  }
  //values for the country dropdown//
  countryArray =['USA', 'Korea', 'Ukraine', 'Cambodia', 'Mexico', 'Philippines'];
  cityArray =['Seattle', 'New York', 'Seoul'];

constructor(
    public dialogRef: MatDialogRef<CountrysearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.countryOptions = this.countryControl.valueChanges
      .pipe(startWith(''),
        map(val => this.filter(val)));
    
    this.cityOption = this.cityControl.valueChanges
    .pipe(startWith(''),
      map(cityval => this.cityfilter(cityval))); 
  }

  filter(val: string): string[] {
    return this.countryArray.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  cityfilter(cityval: string): string[] {
    return this.cityArray.filter(cities => cities.toLowerCase().includes(cityval.toLowerCase()));
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
  
  buildFilter() {
    this.filterChange.emit(this.keywords);
  }
   
}
