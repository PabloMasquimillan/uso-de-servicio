import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }

  invocable_1(){
    let dato = "Función 1 invocada";
    return dato;
  }
  invocable_2(){
    let dato = "Función 2 invocada";
    return dato;
  }
  invocable_3(){
    let dato = "Función 3 invocada";
    return dato;
  }
  Sumar(numero1:any){
    let dato = 5;
    return (dato+numero1);
  }
  Promedio(numero1:any, numero2:any){
    let dato = 5;
    return (numero1+numero2)/2;
  }
}
