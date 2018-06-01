import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-facial-recog-login',
  templateUrl: './facial-recog-login.component.html',
  styleUrls: ['./facial-recog-login.component.css']
})
export class FacialRecogLoginComponent implements OnInit {
  user: any;
  video: any;
  emailNotRegistered: boolean;
  invalid: boolean;
  pictureTaken: boolean;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}
  checkUserCI() {
    console.log(this.user);
    setTimeout(this.loginUser.bind(this), 1000);
  }
  loginUser() {
    this.emailNotRegistered = false;
    this.invalid = false;
    let test = document.getElementById('CI')['value'];
    let y = +test;
    console.log(y);
    if (y > 0.65) {
      console.log(this.user);
      let obs = this._httpService.loginUser(this.user);
      obs.subscribe(data => {
        console.log('Login Data', data);
        // console.log("Errors", data['error'])
        if (data['message'] == 'Error') {
          console.log(data['error']);
          this.emailNotRegistered = true;
        }
        if (data['message'] == 'Success') {
          // this.user.name = data['data']['name']
          this.pictureTaken = true;
          let stream = this.video['srcObject'];
          let tracks = stream.getTracks();
          tracks.forEach(track => {
            console.log(track);
            track.stop();
          });
        }
      });
    } else if (y < 0.65 && y > 0) {
      this.invalid = true;
    } else {
      this.emailNotRegistered = true;
    }
  }
  redirectHome() {
    this._router.navigate(['/']);
  }
}
