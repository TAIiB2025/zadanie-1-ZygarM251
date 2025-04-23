import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component'; 

@NgModule
(
  {
  declarations: 
  [
    AppComponent,
    ProductComponent,
    KoszykComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
