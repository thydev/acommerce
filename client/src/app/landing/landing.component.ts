import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // Spotlight Elements
  private spotlight: any;
  private spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.spotlight = document.querySelector('.spotlight');
    window.addEventListener('mousemove', e => {
      this.updateSpotlight(e);
    });

    window.addEventListener('mousedown', e => {
      if (e.which === 1) {
        this.spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
        this.updateSpotlight(e);
      }
    });

    window.addEventListener('mouseup', e => {
      this.spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
      this.updateSpotlight(e);
    });
  }
  updateSpotlight(e) {
    this.spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX /
      window.innerWidth *
      100}% ${e.pageY / window.innerHeight * 100}%, ${this.spotlightSize}`;
  }

  productPage() {
    this._router.navigate(['/products']);
  }
}
