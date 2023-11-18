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
  public nombreAsignatura!: string;
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

    Swal.fire('Detalle de la asignatura', '<table class="table">\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Nombre</th>\n' +
      '    <th scope="col">ID de la asignatura</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td>' + this.reservaSelected.nombre + '</td>\n' +
      '      <td>' + this.reservaSelected.id + '</td>\n' +
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
      confirmButtonText: "Yes, borra el curso!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El curso ha sido eliminado.",
          icon: "success"
        });
      }
    });
    //this.routerPath.navigate(['/curso/detalle', curso.id]); Estrategia redireccionando la ruta
  }

  protected readonly Reserva = Reserva;
}
