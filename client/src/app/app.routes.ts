import { Routes, RouterModule } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { LandingComponent } from './landing/landing.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FacialRecogComponent } from './facial-recog/facial-recog.component';
import { FacialRecogLoginComponent } from './facial-recog-login/facial-recog-login.component';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent},
  { path: 'facialrecogreg', component: FacialRecogComponent},
  { path: 'facialrecoglogin', component: FacialRecogLoginComponent},
  { path: 'landing/:id', component: LandingComponent},
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
  { path: '**', redirectTo: '' }

];
