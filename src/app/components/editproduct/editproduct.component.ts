import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Proveedor } from 'src/app/models/proveedor';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ProveedordetailsComponent } from '../modals/proveedordetails/proveedordetails.component';
import { Tipoiva } from 'src/app/models/tipoiva';
import { TipoivaService } from 'src/app/services/tipoiva.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent {

  product: Producto;
  proveedores: Proveedor[];
  productForm: FormGroup;
  tiposIva: Tipoiva[];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe,
    private dialog: MatDialog,
    private tipoivaservice:TipoivaService
  ) {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      marca: ['', Validators.required],
      cantidad: ['', Validators.required],
      estado: ['', Validators.required],
      precioBase: ['', Validators.required],
      tipoIva: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      proveedor: ['', Validators.required],
      codBarras: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    // Cargar los datos del producto a editar
    this.productoService.detalle(id).subscribe((producto) => {
      this.product = producto;

      // Asignar los valores del producto al formulario
      this.productForm.patchValue({
        id: producto.id,
        name: producto.name,
        descripcion: producto.descripcion,
        marca: producto.marca,
        cantidad: producto.cantidad,
        estado: producto.estado,
        precioBase: producto.precioBase,
        tipoIva: producto.tipoIva,
        fechaCreacion: producto.fechaCreacion,
        proveedor: producto.proveedor,
        codBarras: producto.codBarras
      });
    });

    this.proveedorService.list().subscribe((proveedores) => {
      this.proveedores = proveedores;
    });
    this.tipoivaservice.list().subscribe((ivas) => {
      this.tiposIva = ivas;
    });
  }

  formatDate(date: string): string {
    const dateObj = new Date(date);
    const formattedDate = this.datePipe.transform(dateObj, 'dd/MM/yyyy');
    return formattedDate ? formattedDate : '';
  }

  showProviderDetails(proveedor: Proveedor): void {
    this.dialog.open(ProveedordetailsComponent, {
      width: '500px',
      data: proveedor,
      panelClass: 'custom-dialog-container'
    });
  }

  volver(): void {
    window.history.back();
  }

  saveChanges(): void {
    const editedProduct: Producto = this.productForm.value;
    this.productoService.edit(editedProduct).subscribe(() => {
      this.product = editedProduct;
      window.history.back();
    });
  }
  
}
