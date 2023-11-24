import {Component, Input} from '@angular/core';
import {Programa} from "../model/programa";

@Component({
  selector: 'app-detalle-programas',
  templateUrl: './detalle-programas.component.html',
  styleUrls: ['./detalle-programas.component.css']
})
export class DetalleProgramasComponent {
  @Input() programas!: Programa;
}
