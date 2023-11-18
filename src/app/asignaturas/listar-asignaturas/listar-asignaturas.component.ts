import {Component, OnInit} from '@angular/core';
import {Asignatura} from "../model/asignatura";
import {AsignaturaService} from "../service/asignatura.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-asignaturas',
  templateUrl: './listar-asignaturas.component.html',
  styleUrls: ['./listar-asignaturas.component.css']
})
export class ListarAsignaturasComponent implements OnInit {
  public asignaturas: Array<Asignatura> = [];
  public nombreAsignatura!: string;
  public asignaturaSelected!: Asignatura;
  public selected: boolean = false;

  constructor(private asignaturaService: AsignaturaService) {
    this.asignaturaService.getAsignaturas().subscribe((asignaturas: Array<Asignatura>) => {
        this.asignaturas = asignaturas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(asignatura: Asignatura) {
    this.asignaturaSelected = asignatura;
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
      '      <td>' + this.asignaturaSelected.nombre + '</td>\n' +
      '      <td>' + this.asignaturaSelected.id + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
}
  borrarAsignatura(asignatura: Asignatura) {

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

  protected readonly Asignatura = Asignatura;
}
