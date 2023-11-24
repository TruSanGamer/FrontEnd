import {Component, OnInit} from '@angular/core';
import {Reserva} from "../model/reserva";
import {ReservaService} from  "../service/reserva.service"
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


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

  constructor(private reservaService: ReservaService, private routerPath: Router, private router: ActivatedRoute) {
    this.reservaService.getReservas().subscribe(
      (reservas: Array<Reserva>) => {
        this.reservas = reservas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(reserva: Reserva) {
    this.reservaSelected = reserva;
    this.selected=true;
    // console.log(this.cursoSelected); //Imprime en la consola del navegador el curso seleccionado
    this.routerPath.navigate(['/editar/' + this.reservaSelected.sala]); //Redirecciona a la ruta /editar/:id
  }


  borrarReserva(reserva: Reserva) {

    Swal.fire({
      title: "Está seguro?",
      text: "Usted no puede revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra la reserva!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservaService.borrarReserva(reserva.fechaInicio).subscribe(() => { // Llama al servicio para eliminar el curso
          Swal.fire({
            title: "Eliminado!",
            text: "La reserva ha sido eliminada.",
            icon: "success"
          });
          this.reservas = this.reservas.filter((c) => c !== reserva); // Actualiza la lista de cursos en la vista
        });
      }
    });
    //this.routerPath.navigate(['/curso/detalle', curso.id]);x Estrategia redireccionando la ruta
  }
  crearReserva() {
    this.routerPath.navigate(['/crear']);
  }
}
