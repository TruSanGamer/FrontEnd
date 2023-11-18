import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaRoutingModule } from './reserva-routing.module';
import {ListarReservaComponent} from "./listar-reserva/listar-reserva.component";
import {CrearReservaComponent} from "./crear-reserva/crear-reserva.component";
import {DetalleReservaComponent} from "./detalle-reserva/detalle-reserva.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListarReservaComponent,
    CrearReservaComponent,
    DetalleReservaComponent,
  ],
  exports: [
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservaModule { }
