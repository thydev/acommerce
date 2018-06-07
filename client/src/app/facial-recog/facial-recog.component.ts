import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-facial-recog',
  templateUrl: './facial-recog.component.html',
  styleUrls: ['./facial-recog.component.css']
})
export class FacialRecogComponent implements OnInit {
  private payload  = { "image" :  "", "subject_id": "", "gallery_name": "Wunderlust"};
  private headers = {
    "Content-type"     : "application/json",
    "app_id"          : "0b5610a3",
    "app_key"         : "66ae3d988e76f7fe922eb80a415bd4b8"
  };
  width = 320;    // We will scale the photo width to this
  height = 0;     // This will be computed based on the input stream
  streaming = false;
  video = null;
  canvas = null;
  photo = null;

  context = null;
  data = null;
  newUser = {name: "", email: ""};
  emailUsed = false;
  pictureTaken = false;
  picCount = 0;
  picFunction = null;
  emailSum: String;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  // THINGS TO DO: Add on keydown event for email input as event for validations. Regex and remove red valid if valids met, run functions, not for unique email could be security issue. That must be on submit event.
  //Store user id to user side http service ts file.
  //Cart have the cart update functions run to update back-end and front on click function Quantity update issues. Outer?
  //Progress spinner while Registering/Login?
  ngOnInit() {
    this.startUp();
  }
  // Start up function assigns document elements to properties of this class then adds event listeners to properties.
  startUp(){
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
    this.photo = document.getElementById('photo');

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
  //canvas is styled. stores canvas DataURL image/png to data property, set attribute of photo tag to src with data from canvas.
  clearPhoto(){
    this.context = this.canvas.getContext('2d');
    this.context.fillStyle = '#AAA';
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.data = this.canvas.toDataURL('image/png');
    this.photo.setAttribute('src', this.data);
  }
  ready(){
    this.picFunction = setInterval(()=> this.takePicture(), 600);
  }
  takePicture(){
    let emailcheck = document.getElementById("emailUsed");
    if(emailcheck){
      clearInterval(this.picFunction)
    }
    if(!emailcheck){
      this.picCount++;
      if(this.picCount == 4){
        clearInterval(this.picFunction);
        let stream = this.video.srcObject;
        let tracks = stream.getTracks();
        tracks.forEach((track)=>{
          track.stop();
        })
        return;
      }
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
        let url = "http://api.kairos.com/enroll";

        $.ajax(url, {
          headers  : this.headers,
          type: "POST",
          data: JSON.stringify(this.payload),
          dataType: "text"
        }).done((response)=>{
          console.log(response);
        });
        } else {
        this.clearPhoto();
        }
      }
    }
  registerUser(){
    this.emailUsed = false;
    console.log("New User", this.newUser);
    let obs = this._httpService.createUser(this.newUser);
    obs.subscribe(data=>{
      console.log("Create Data", data);
      // console.log("Errors", data['error'])
      if(data['message']=="Error"){
        console.log(data['error']['errors']['email']['message']);
        this.emailUsed = true;
      }
      if(data['message']=="Success"){
        this.ready();
        this.pictureTaken = true;
        //Need function to query for new registered user by email
        setTimeout(this.registrationSuccess.bind(this), 2600)
      }
    })
  }

  emailValids(e: any){
    console.log(e.keyCode);
    console.log(e.key);
    this.emailSum = this.newUser.email;
    console.log(this.emailSum);
    // Email REgex needed
    // cross match with regex
    if(e.keydown){
    }
  }
  registrationSuccess(){
    //Redirect to previous page is goal
    this.redirectHome();
  }
  //Redirect to previous page. Figure out
  redirectHome(){
    let stream = this.video['srcObject'];
    let tracks = stream.getTracks();
    tracks.forEach((track)=>{
        console.log(track);
        track.stop();
    })
    this._router.navigate([this._httpService.prevRoute])
  }
}
