import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ListadoComponent
    //dentro del modulo hay un componente o varios, hay que exportarlos e importar el componente
    //al importar el modulo desde otro archivo se importa todo
  ],
  exports: [ListadoComponent]
})
export class ProductosModule { }

