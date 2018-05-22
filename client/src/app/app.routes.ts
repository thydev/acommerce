import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductReviewComponent } from './product-review/product-review.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'profile', component: ProfileComponent },
=======
import { ProductMainComponent } from './product-main/product-main.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
>>>>>>> 3f5a9e38dc3df1b14ae3ae5f84beca5e85348601
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }

];
