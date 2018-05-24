import { Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { LandingComponent } from './landing/landing.component';
import { SellerComponent } from './seller/seller.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent},
  { path: 'landing/:id', component: LandingComponent},
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
  { path: 'sellers', component: SellerComponent },
  { path: '**', redirectTo: '' }

];
