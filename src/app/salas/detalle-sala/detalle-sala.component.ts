import {Component, Input} from '@angular/core';
import {Sala} from "../model/sala";

@Component({
  selector: 'app-detalle-sala',
  templateUrl: './detalle-sala.component.html',
  styleUrls: ['./detalle-sala.component.css']
})
export class DetalleSalaComponent {
  @Input() sala!: Sala;
}
