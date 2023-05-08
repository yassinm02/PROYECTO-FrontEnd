import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {

  product: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.productoService.detalle(id).subscribe(
      producto => this.product = producto
    );
  }

  formatDate(date:string): string {
    const dateObj = new Date(date);
    const formattedDate = this.datePipe.transform(dateObj, 'dd/MM/yyyy');
    return formattedDate ? formattedDate : '';  }

}
