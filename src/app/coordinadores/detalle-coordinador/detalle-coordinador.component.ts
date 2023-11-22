import {Component, Input} from '@angular/core';
import {Coordinador} from "../model/coordinador";
@Component({
  selector: 'app-detalle-coordinador',
  templateUrl: './detalle-coordinador.component.html',
  styleUrls: ['./detalle-coordinador.component.css']
})
export class DetalleCoordinadorComponent {
  @Input() coordinador!: Coordinador;

}
