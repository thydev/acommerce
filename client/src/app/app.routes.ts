import { Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductMainComponent } from './product-main/product-main.component';

export const ROUTES: Routes = [
  { path: 'products/:product', component: ProductReviewComponent },
  { path: 'products', component: ProductMainComponent },
  { path: '**', redirectTo: '' }

];
