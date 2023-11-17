import {Component, Input} from '@angular/core';
import {Docente} from "../model/docente";

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.component.html',
  styleUrls: ['./detalle-docente.component.css']
})
export class DetalleDocenteComponent {
  @Input() docente!: Docente;

}
