import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsindexComponent } from './components/productsindex/productsindex.component';
import { IndexComponent } from './components/structure/index/index.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "productos",
    component: ProductsindexComponent
  },
  {
    path: ":id",
    component: ProductdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
