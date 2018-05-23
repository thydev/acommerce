import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Angular Flex
import {FlexLayoutModule} from "@angular/flex-layout";
// Angular Bootstrap:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
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
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
  } from '@angular/material';

// App compoents and services
import { AppComponent } from './app.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductReviewDetailsComponent } from './product-review-details/product-review-details.component';
import { ProductUserReviewComponent } from './product-user-review/product-user-review.component';
import { ProductReviewListingComponent } from './product-review-listing/product-review-listing.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './profile/profile.component';


import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PriceSearchComponent } from './price-search/price-search.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ProductReviewComponent,
    ProductReviewDetailsComponent,
    ProductUserReviewComponent,
    ProductReviewListingComponent,

    ProductCartComponent,

    ProductMainComponent,
    LocationSearchComponent,
    PriceSearchComponent,
    WeatherSearchComponent,
    ProfileComponent,
    OrderComponent
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
    FlexLayoutModule,
    MatSelectModule,
    MatDividerModule,
    MatSliderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
