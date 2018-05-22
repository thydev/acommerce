import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    MatGridListModule
  } from '@angular/material';

// App compoents and services
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductReviewDetailsComponent } from './product-review-details/product-review-details.component';
import { ProductUserReviewComponent } from './product-user-review/product-user-review.component';
import { ProductReviewListingComponent } from './product-review-listing/product-review-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProductReviewComponent,
    ProductReviewDetailsComponent,
    ProductUserReviewComponent,
    ProductReviewListingComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
