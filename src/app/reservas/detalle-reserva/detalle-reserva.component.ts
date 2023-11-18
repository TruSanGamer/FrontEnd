import {Component, Input} from '@angular/core';
import {Reserva} from "../model/reserva";

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent {
  @Input() reserva!: Reserva;
}
