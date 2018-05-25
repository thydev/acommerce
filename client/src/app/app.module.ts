import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
// Angular Flex
import {FlexLayoutModule} from '@angular/flex-layout';
// Angular Bootstrap:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from './http.service';


// Material Components
import {CdkTableModule} from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatOptionModule,
  } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MatFormFieldModule } from '@angular/material/form-field';
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
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { OrderComponent } from './order/order.component';
import { LandingComponent } from './landing/landing.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

import { SellerComponent } from './seller/seller.component';
import { SellerService } from './services/seller.service';
import { SellerProductComponent } from './seller-product/seller-product.component';
import { SellerNewComponent } from './seller-new/seller-new.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
import { CountrysearchComponent } from './countrysearch/countrysearch.component';
import { ActivitysearchComponent } from './activitysearch/activitysearch.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';


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
    WeatherSearchComponent,
    LandingComponent,
<<<<<<< HEAD
    MainmenuComponent,
    SellerComponent,
    SellerProductComponent,
    SellerNewComponent,
    ProductNewComponent,

    NewarrivalComponent,
    CountrysearchComponent,
    ActivitysearchComponent,
    ProductsearchComponent
=======
    MainmenuComponent
>>>>>>> includebackend
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    MatOptionModule,
    CdkTableModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule
  ],
  entryComponents: [SellerNewComponent, ProductNewComponent, CountrysearchComponent, ActivitysearchComponent, ProductsearchComponent],
  providers: [HttpService, SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
