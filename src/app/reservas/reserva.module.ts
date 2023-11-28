import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaRoutingModule } from './reserva-routing.module';
import {ListarReservaComponent} from "./listar-reserva/listar-reserva.component";
import {CrearReservaComponent} from "./crear-reserva/crear-reserva.component";
import {DetalleReservaComponent} from "./detalle-reserva/detalle-reserva.component";
import {ReactiveFormsModule} from "@angular/forms";
//import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';



@NgModule({
  declarations: [
    ListarReservaComponent,
    CrearReservaComponent,
    DetalleReservaComponent,
    //EditarReservaComponent,

  ],
  exports: [
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservaModule { }
