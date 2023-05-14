import { Proveedor } from './proveedor';
import { Tipoiva } from './tipoiva';


export class Producto {

    id ?: number; 
    name : string;
    descripcion : string; 
    marca : string; 
    cantidad : number; 
    estado : string; 
    precioBase : number;
    tipoIva  : Tipoiva; 
    fechaCreacion: Date; 
    proveedor  : Proveedor; 
    imagen : string ; 
    codBarras : string;

    constructor(){}

}
