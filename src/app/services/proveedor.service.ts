import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  
  proveedorURL = "http://localhost:8085/proveedores";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.proveedorURL);
  }

  public detalle(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(this.proveedorURL + "/" + id);
  }

  public crear(proveedor: Proveedor): Observable<any> {
    return this.httpClient.post<any>(this.proveedorURL, proveedor);
  }

  public editar(proveedor: Proveedor, id: number): Observable<any> {
    return this.httpClient.put<any>(this.proveedorURL + "/" + id, proveedor);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proveedorURL + "/" + id);
  }
}


