import {Component, OnInit} from '@angular/core';
import {Reserva} from "../model/reserva";
import {ReservaService} from  "../service/reserva.service"
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  public reservas: Array<Reserva> = [];
  public nombreResrva!: string;
  public reservaSelected!: Reserva;
  public selected: boolean = false;

  constructor(private reservaService: ReservaService) {
    this.reservaService.getReservas().subscribe((reservas: Array<Reserva>) => {
        this.reservas = reservas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(reserva: Reserva) {
    this.reservaSelected = reserva;
    this.selected = true

    Swal.fire('Detalle de la reserva', '<table class="table">\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Sala</th>\n' +
      '    <th scope="col">Fecha de Inicio</th>\n' +
      '    <th scope="col">Fecha de Finalizacion</th>\n' +
      '    <th scope="col">Detalles</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td>' + this.reservaSelected.sala + '</td>\n' +
      '      <td>' + this.reservaSelected.fehaInicio + '</td>\n' +
      '      <td>' + this.reservaSelected.fechaFinalizacion + '</td>\n' +
      '      <td>' + this.reservaSelected.detalle + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
  }
  borrarReserva(reserva: Reserva) {

    Swal.fire({
      title: "Estas seguro?",
      text: "Usted no puede revertir eso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, borra la reserva!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "La Reserva ha sido elimanda.",
          icon: "success"
        });
      }
    });
    //this.routerPath.navigate(['/curso/detalle', curso.id]); Estrategia redireccionando la ruta
  }

  protected readonly Reserva = Reserva;
}
