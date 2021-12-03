import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SweetIndexComponent } from './sweet-index/sweet-index.component';
import { SweetProductsComponent } from './sweet-products/sweet-products.component';
import { TodayComponent } from './sweet-products/today/today.component';
import { SweetRegisterComponent } from './sweet-register/sweet-register.component';
import { HotComponent } from './sweet-products/hot/hot.component';
import { NewProductsComponent } from './sweet-products/new-products/new-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: SweetIndexComponent },
  {
    path: 'products', component: SweetProductsComponent,
    children: [
      { path: 'today', component: TodayComponent },
      { path: 'hot', component: HotComponent },
      {path:'newProducts', component:NewProductsComponent}
    ]
  },
  { path: 'register', component: SweetRegisterComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
