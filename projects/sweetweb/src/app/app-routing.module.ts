import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SweetIndexComponent } from './sweet-index/sweet-index.component';
import { SweetProductsComponent } from './sweet-products/sweet-products.component';
import { SweetRegisterComponent } from './sweet-register/sweet-register.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: SweetIndexComponent },
  { path: 'products', component: SweetProductsComponent },
  { path: 'register', component: SweetRegisterComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
