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
  selector: 'app-activitysearch',
  templateUrl: './activitysearch.component.html',
  styleUrls: ['./activitysearch.component.css']
})
export class ActivitysearchComponent implements OnInit {
  @Output() filterChange = new EventEmitter();
  activityControl: FormControl = new FormControl();

  activityOption: Observable<string[]>;
 
  activityOptions: string;
  productresults: any;
  keywords = {
    activity: ''
  }
  //values for the country dropdown//
  activeArray =['Hiking', 'Swimming', 'Camping'];

constructor(
    public dialogRef: MatDialogRef<ActivitysearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
    this.activityOption = this.activityControl.valueChanges
    .pipe(startWith(''),
      map(actival => this.activefilter(actival))); 
  }

  activefilter(actival: string): string[] {
    return this.activeArray.filter(activities => activities.toLowerCase().includes(actival.toLowerCase()));
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
