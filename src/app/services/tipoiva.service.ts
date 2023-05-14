import { Injectable } from '@angular/core';
import { Tipoiva } from '../models/tipoiva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class TipoivaService {

  productURL = "http://localhost:8085/tipoiva";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Tipoiva[]> {
    return this.httpClient.get<Tipoiva[]>(this.productURL);
  }

  public detalle(id: number): Observable<Tipoiva> {
    return this.httpClient.get<Tipoiva>(this.productURL + "/" + id);
  }

}
