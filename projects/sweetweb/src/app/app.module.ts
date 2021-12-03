import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//component
import { AppComponent } from './app.component';
import { SweetProductsComponent } from './sweet-products/sweet-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { SweetIndexComponent } from './sweet-index/sweet-index.component';
import { SweetRegisterComponent } from './sweet-register/sweet-register.component';
import { FooterComponent } from './footer/footer.component';
import { TodayComponent } from './sweet-products/today/today.component';
import { NewProductsComponent } from './sweet-products/new-products/new-products.component';
import { HotComponent } from './sweet-products/hot/hot.component';

@NgModule({
  declarations: [
    AppComponent,
    SweetIndexComponent,
    SweetProductsComponent,
    NavbarComponent,
    CartComponent,
    SweetRegisterComponent,
    FooterComponent,
    TodayComponent,
    NewProductsComponent,
    HotComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
