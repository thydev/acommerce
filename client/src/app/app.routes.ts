import { Routes, RouterModule } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { LandingComponent } from './landing/landing.component';
import { SellerComponent } from './seller/seller.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FacialRecogComponent } from './facial-recog/facial-recog.component';
import { FacialRecogLoginComponent } from './facial-recog-login/facial-recog-login.component';

export const ROUTES: Routes = [  { path: 'landing/:id', component: LandingComponent},
  { path: '', component: LandingComponent},
  { path: 'facialrecogreg', component: FacialRecogComponent},
  { path: 'facialrecoglogin', component: FacialRecogLoginComponent},
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products/order/product', component: ProductCartComponent},  // just for testing
  { path: 'products', component: ProductMainComponent },
  { path: 'sellers', component: SellerComponent },
  { path: 'productmain/main/main', component: ProductMainComponent },
  { path: 'products/order/product', component: ProductCartComponent},  //just for testing
  { path: '**', redirectTo: '' }
];
