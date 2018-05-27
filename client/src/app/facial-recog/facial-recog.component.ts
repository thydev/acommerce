import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-facial-recog',
  templateUrl: './facial-recog.component.html',
  styleUrls: ['./facial-recog.component.css']
})
export class FacialRecogComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  newUser = {name: "", email: ""};
  emailUsed = false;
  pictureTaken = false;
  ngOnInit() {

  }

  registerUser(){
    this.emailUsed = false;
    console.log(this.newUser);
    let obs = this._httpService.createUser(this.newUser);
    obs.subscribe(data=>{
      console.log("Create Data", data);
      // console.log("Errors", data['error'])
      if(data['message']=="Error"){
        console.log(data['error']['errors']['email']['message']);
        this.emailUsed = true;
      }
      if(data['message']=="Success"){
        setTimeout(this.registrationSuccess.bind(this), 2600)
      }
    })
  }
  registrationSuccess(){
    this.pictureTaken = true;
  }
  redirectHome(){
    this._router.navigate(['/'])
  }
}
