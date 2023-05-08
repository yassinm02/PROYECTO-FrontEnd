import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { NavbarComponent } from './components/structure/navbar/navbar.component';
import { ProductsindexComponent } from './components/productsindex/productsindex.component';
import { IndexComponent } from './components/structure/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductsindexComponent,
    IndexComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
