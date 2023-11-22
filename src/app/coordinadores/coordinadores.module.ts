import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadoresRoutingModule } from './coordinadores-routing.module';
import {ListarCoordinadorComponent} from "./listar-coordinador/listar-coordinador.component";
import {CrearCoordinadorComponent} from "./crear-coordinador/crear-coordinador.component";
import {DetalleCoordinadorComponent} from "./detalle-coordinador/detalle-coordinador.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditarCoordinadorComponent } from './editar-coordinador/editar-coordinador.component';

@NgModule({
  declarations: [
    ListarCoordinadorComponent,
    CrearCoordinadorComponent,
    DetalleCoordinadorComponent,
    EditarCoordinadorComponent,
  ],
  exports: [
    ListarCoordinadorComponent
  ],
  imports: [
    CommonModule,
    CoordinadoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoordinadoresModule { }
