import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: any[] = [
    { nombre: "Manzanas orgánicas", precio: 3.5, categoria: "alimento" },
    { nombre: "Camiseta de algodón reciclado", precio: 15.99, categoria: "ropa" },
    { nombre: "Juego de mesa educativo", precio: 24.99, categoria: "juguete" },
    { nombre: "Lámpara solar de jardín", precio: 12.49, categoria: "hogar" },
    { nombre: "Agenda ecológica", precio: 9.99, categoria: "oficina" },
    { nombre: "Kit de pintura para niños", precio: 7.99, categoria: "arte" },
    { nombre: "Bolso impermeable para portátil", precio: 29.99, categoria: "accesorio" },
    { nombre: "Auriculares Bluetooth deportivos", precio: 34.99, categoria: "tecnología" },
    { nombre: "Aceite esencial relajante", precio: 8.49, categoria: "bienestar" },
    { nombre: "Semillas de flores variadas", precio: 2.99, categoria: "jardinería" },
  ];
  

  eliminar(nombre:string) {
    let index:number= this.productos.findIndex((p) => p.nombre == nombre );
    //llaves tiene que tener return
    console.log(index, nombre);
    if(index>=0) {
      this.productos.splice(index, 1);
    }
   
  }

  
}
