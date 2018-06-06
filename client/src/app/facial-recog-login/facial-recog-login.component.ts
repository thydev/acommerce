import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
import * as jQuery from 'jquery'

@Component({
  selector: 'app-facial-recog-login',
  templateUrl: './facial-recog-login.component.html',
  styleUrls: ['./facial-recog-login.component.css']
})
export class FacialRecogLoginComponent implements OnInit {
  private payload  = { "image" :  "", "subject_id": "", "gallery_name": "Wunderlust"};
  private headers = {
    "Content-type"     : "application/json",
    "app_id"          : "0b5610a3",
    "app_key"         : "66ae3d988e76f7fe922eb80a415bd4b8"
  };
  user= {email: "", name: ""};
  emailNotRegistered = false;
  pictureTaken = false;
  invalid = false;
  width = 320;    // We will scale the photo width to this
  height = 0;     // This will be computed based on the input stream
  streaming = false;
  video = null;
  canvas = null;
  photo = null;
  startbutton = null;
  context = null;
  data = null;
  newUser = {name: "", email: ""};
  emailUsed = false;
  picCount = 0;
  picFunction = null;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.startUp();
  }
  checkUserCI(){
    console.log(this.user);
    setTimeout(this.loginUser.bind(this), 1000);
  }
  startUp(){
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
    this.photo = document.getElementById('photo');
    this.startbutton = document.getElementById('startbutton');
    //Promise below to retrieve stream from getUserMedia function then assign to video property
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then((stream)=>{
      this.video.srcObject = stream;
      this.video.play();
    })
    .catch((err)=>{
      console.log("An error occured!" + err);
    });
    //gives video and canvas tags same height and width, then starts stream if not running.
    this.video.addEventListener('canplay', (ev)=>{
      if(!this.streaming){
        this.height = this.video.videoHeight / (this.video.videoWidth/this.width);
        this.video.setAttribute('width', this.width);
        this.video.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        this.canvas.setAttribute('height', this.height);
        this.streaming = true;
      }
    }, false);
    this.clearPhoto();
  }
  clearPhoto(){
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = '#AAA';
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.data = this.canvas.toDataURL('image/png');
    this.photo.setAttribute('src', this.data);
  }
  takePicture(){
    this.context = this.canvas.getContext('2d')
    if(this.width && this.height){
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.context.drawImage(this.video, 0, 0, this.width, this.height);
      this.data = this.canvas.toDataURL('image/png');
      this.photo.setAttribute('src', this.data);
      this.payload.image = this.data;
      let useremail = document.getElementById('email')['value'];
      this.payload.subject_id = useremail;
      let url = "http://api.kairos.com/verify";
      //FACIAL RECOGNITION API BELOW
      // AJAX request to Kairos API for facial recognition login with data: image, user name, and API keys;
      //For log in have user input name, grab that data to verify. Send data to TS component if successful (meeting CI level then log-in, pass data to DB to log user in)
      $.ajax(url, {
        headers  : this.headers,
        type: "POST",
        data: JSON.stringify(this.payload),
        dataType: "json"
      }).done((response)=>{
        console.log(response);
        if(response['Errors']){
          return;
        }
        let resCI = response.images[0].transaction.confidence;
        console.log("resCI", resCI);
        let Confidence = document.getElementById('CI');
        Confidence['value'] = resCI;
      });
      } else {
      this.clearPhoto();
      }
    }
  loginUser(){
    this.emailNotRegistered = false;
    this.invalid = false;
    let test = document.getElementById("CI")['value'];
    let y = +test;
    console.log(y);
    if(y > .65){
      console.log(this.user);
      let obs = this._httpService.loginUser(this.user);
      obs.subscribe(data=>{
        console.log("Login Data", data);
        // console.log("Errors", data['error'])
        if(data['message']=="Error"){
          console.log(data['error']);
          this.emailNotRegistered = true;
        }
        if(data['message']=="Success"){
          this.user.name = data['data']['name']
          this.pictureTaken = true;
          setTimeout(this.redirectHome.bind(this), 1000);
        }
      })
    }
    else if(y < .65 && y > 0){
      this.invalid = true;
    }
    else{
      this.emailNotRegistered = true;
    }
  }
  redirectHome(){
    let stream = this.video['srcObject'];
    let tracks = stream.getTracks();
    tracks.forEach((track)=>{
        console.log(track);
        track.stop();
    })
    //Have route navigate to previous page prior to log in
    this._router.navigate(['/'])
  }
}
