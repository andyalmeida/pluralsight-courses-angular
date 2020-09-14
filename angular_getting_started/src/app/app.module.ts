import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, HttpClientModule, ProductsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
