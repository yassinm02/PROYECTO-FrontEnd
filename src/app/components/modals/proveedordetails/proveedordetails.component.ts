import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-proveedordetails',
  templateUrl: './proveedordetails.component.html',
  styleUrls: ['./proveedordetails.component.scss']
})
export class ProveedordetailsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public proveedor: Proveedor
  ) { }

}
