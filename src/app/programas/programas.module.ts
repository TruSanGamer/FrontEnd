import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramasRoutingModule } from './programas-routing.module';
import {ListarProgramasComponent} from "./listar-programas/listar-programas.component";
import {CrearProgramasComponent} from "./crear-programas/crear-programas.component";
import {DetalleProgramasComponent} from "./detalle-programas/detalle-programas.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListarProgramasComponent,
    CrearProgramasComponent,
    DetalleProgramasComponent
  ],
  exports: [
    ListarProgramasComponent
  ],
  imports: [
    CommonModule,
    ProgramasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProgramasModule { }
