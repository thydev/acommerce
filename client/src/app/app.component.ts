import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {MatSidenav} from '@angular/material/sidenav'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}


