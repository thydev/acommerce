import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-newarrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.css']
})
export class NewarrivalComponent implements OnInit {

  test: any = 3;

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }



  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);


    if (element < 950) {
      this.test = 2;
    }

    if (element > 950) {
      this.test = 3;
    }

    if (element < 750) {
      this.test = 1;
    }
  }
}
