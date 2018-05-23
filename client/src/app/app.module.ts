import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Angular Bootstrap:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './http.service';


// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule
  } from '@angular/material';

// App compoents and services
import { AppComponent } from './app.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

import { ProductMainComponent } from './product-main/product-main.component';

import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductReviewDetailsComponent } from './product-review-details/product-review-details.component';
import { ProductUserReviewComponent } from './product-user-review/product-user-review.component';
import { ProductReviewListingComponent } from './product-review-listing/product-review-listing.component';
import { AppRoutingModule } from './/app-routing.module';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PriceSearchComponent } from './price-search/price-search.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { OrderComponent } from './order/order.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductCartComponent,
    ProductReviewComponent,
    ProductReviewDetailsComponent,
    ProductUserReviewComponent,
    ProductReviewListingComponent,
    ProductCartComponent,
    ProductMainComponent,
    LocationSearchComponent,
    PriceSearchComponent,
    WeatherSearchComponent,
    OrderComponent,
    LandingComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    MatMenuModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
