import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { Proveedor } from 'src/app/models/proveedor';
import { Tipoiva } from 'src/app/models/tipoiva';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { TipoivaService } from 'src/app/services/tipoiva.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewproductComponent {
  product: Producto = new Producto();

  proveedores: Proveedor[];
  tiposIva: Tipoiva[];

  productForm!: FormGroup;
  submitted = false;

  constructor(
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe,
    private tipoivaservice: TipoivaService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      estado: ['', Validators.required],
      precioBase: ['', [Validators.required, Validators.min(0)]],
      tipoIva: ['', Validators.required],
      proveedor: ['', Validators.required],
      codBarras: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.product = new Producto();

    this.proveedorService.list().subscribe((proveedores) => {
      this.proveedores = proveedores;
    });
    this.tipoivaservice.list().subscribe((ivas) => {
      this.tiposIva = ivas;
    });
  }

  volver(): void {
    window.history.back();
  }

  save(): void {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    } 
    else {
      this.productoService.crear(this.productForm.value).subscribe(() => {
        this.product = this.productForm.value;
        
      });
      
    }
  }

  get f() {
    return this.productForm.controls;
  }
}
