import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productURL = "http://localhost:8085/productos";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productURL);
  }

  public detalle(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productURL + "/" + id);
  }

  public crear(product: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productURL, product);
  }

  public editar(product: Producto, id: number): Observable<any> {
    return this.httpClient.put<any>(this.productURL + "/" + id, product);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + "/" + id);
  }

}
