
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Component, ViewChild } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  constructor(private _httpService: HttpService,
    private _router: Router) {
    
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}


