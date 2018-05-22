import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
