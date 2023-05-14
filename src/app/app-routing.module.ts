import { EditproductComponent } from './components/editproduct/editproduct.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsindexComponent } from './components/productsindex/productsindex.component';
import { IndexComponent } from './components/structure/index/index.component';
import { NgModule } from '@angular/core';
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
    path: "productos/:id",
    component: ProductdetailsComponent
  },
  {
    path: "edit/:id",
    component: EditproductComponent
  },
  {
    path: "nuevo",
    component: NewproductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
