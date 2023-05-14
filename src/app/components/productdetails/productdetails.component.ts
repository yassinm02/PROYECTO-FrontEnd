import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Producto } from 'src/app/models/producto';
import { Proveedor } from 'src/app/models/proveedor';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedordetailsComponent } from '../modals/proveedordetails/proveedordetails.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {

  product: Producto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    public datePipe: DatePipe,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.productoService.detalle(id).subscribe(
      producto => this.product = producto
    );
  }

  formatDate(date: string): string {
    const dateObj = new Date(date);
    const formattedDate = this.datePipe.transform(dateObj, 'dd/MM/yyyy');
    return formattedDate ? formattedDate : '';
  }

  mostrarDetalleProveedor = (proveedor : Proveedor) => {
    const dialogRef = this.dialog.open(ProveedordetailsComponent, {
      width: '500px',
      data: proveedor,
      panelClass: 'custom-dialog-container'
    });
  }

  volver(): void {
    window.history.back();
  }

  EditProduct(id:number | undefined): void{
    if (id !== undefined) {
      this.router.navigateByUrl('edit/'+id);
    }
  }
  
}
