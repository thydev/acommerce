import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  token;
  constructor(private _httpService: HttpService,
    private _router: Router,
  ) {}

  ngOnInit(): void {

  }
  Login(){
    console.log("LOGIN!!!");
    this._router.navigate(['userlogin'])
  }

}
