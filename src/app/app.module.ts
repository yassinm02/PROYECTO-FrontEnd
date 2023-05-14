import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { NavbarComponent } from './components/structure/navbar/navbar.component';
import { ProductsindexComponent } from './components/productsindex/productsindex.component';
import { IndexComponent } from './components/structure/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { DatePipe } from '@angular/common';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProveedordetailsComponent } from './components/modals/proveedordetails/proveedordetails.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductsindexComponent,
    IndexComponent,
    ProductdetailsComponent,
    NewproductComponent,
    ProveedordetailsComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
