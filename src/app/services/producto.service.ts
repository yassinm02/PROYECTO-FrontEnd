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

  productURL = "http://192.168.0.17:8085/productos";

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

  public edit(product: Producto): Observable<any> {
    const url = `${this.productURL}/${product.id}`;
    return this.httpClient.put<any>(url, product);
  }
  

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + "/" + id);
  }

}
