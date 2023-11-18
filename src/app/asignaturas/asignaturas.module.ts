import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import {ListarAsignaturasComponent} from "./listar-asignaturas/listar-asignaturas.component";
import {CrearAsignaturaComponent} from "./crear-asignatura/crear-asignatura.component";
import {DetalleAsignaturaComponent} from "./detalle-asignatura/detalle-asignatura.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListarAsignaturasComponent,
    CrearAsignaturaComponent,
    DetalleAsignaturaComponent,
  ],
  exports: [
    ListarAsignaturasComponent
  ],
  imports: [
    CommonModule,
    AsignaturasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsignaturasModule { }
