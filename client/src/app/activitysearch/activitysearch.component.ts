import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { NgModel, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, startWith } from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-activitysearch',
  templateUrl: './activitysearch.component.html',
  styleUrls: ['./activitysearch.component.css']
})
export class ActivitysearchComponent implements OnInit {
  activityControl: FormControl = new FormControl();

  activityOption: Observable<string[]>;

  activityOptions: string;
  productresults: any;
  keywords = {
    activity: ''
  };
  // values for the country dropdown//
  activeArray = ['Hiking', 'Swimming', 'Camping'];

  constructor(
    public dialogRef: MatDialogRef<ActivitysearchComponent>,
    private _httpService: HttpService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.activityOption = this.activityControl.valueChanges.pipe(
      startWith(''),
      map(actival => this.activefilter(actival))
    );

    this.activityControl.setValue(this._httpService.keywords.activity);
  }

  activefilter(actival: string): string[] {
    return this.activeArray.filter(activities =>
      activities.toLowerCase().includes(actival.toLowerCase())
    );
  }

  activityChange($event) {
    this.keywords.activity = $event;
  }
}
