import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-productsindex',
  templateUrl: './productsindex.component.html',
  styleUrls: ['./productsindex.component.scss']
})
export class ProductsindexComponent implements OnInit {

  products: Producto[] = [];
  filteredProducts: Producto[] = [];

  constructor(
    private productService: ProductoService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  FilterProductsBayName(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;
    if (searchValue) {
      this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
      this.filteredProducts = this.products;
    }
  }

  onSearch(event: Event) {
    const searchString = (event.target as HTMLInputElement).value;
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()));
  }
  
  ProductDetails(id:number | undefined): void{
    if (id !== undefined) {
      this.router.navigateByUrl('productos/'+id);
    }
  }
  
  NewProduct(){
    this.router.navigateByUrl('nuevo');
  }
}
