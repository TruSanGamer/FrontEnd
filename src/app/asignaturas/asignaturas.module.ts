import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import {ListarAsignaturasComponent} from "./listar-asignaturas/listar-asignaturas.component";
import {CrearAsignaturaComponent} from "./crear-asignatura/crear-asignatura.component";
import {DetalleAsignaturaComponent} from "./detalle-asignatura/detalle-asignatura.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditarAsignaturaComponent } from './editar-asignatura/editar-asignatura.component';


@NgModule({
  declarations: [
    ListarAsignaturasComponent,
    CrearAsignaturaComponent,
    DetalleAsignaturaComponent,
    EditarAsignaturaComponent,
  ],
  exports: [
    ListarAsignaturasComponent
  ],
  imports: [
    CommonModule,
    AsignaturasRoutingModule,
    ReactiveFormsModule
  ]
})
export class AsignaturasModule { }
