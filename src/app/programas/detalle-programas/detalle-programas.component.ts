import {Component, Input} from '@angular/core';
import {Programas} from "../model/programas";

@Component({
  selector: 'app-detalle-programas',
  templateUrl: './detalle-programas.component.html',
  styleUrls: ['./detalle-programas.component.css']
})
export class DetalleProgramasComponent {
  @Input() programas!: Programas;
}
