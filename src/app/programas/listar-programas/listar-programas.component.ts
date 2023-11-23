import {Component, OnInit} from '@angular/core';
import {ProgramasService} from "../service/programas.service";
import Swal from "sweetalert2";
import {Programas} from "../model/programas";

@Component({
  selector: 'app-listar-programas',
  templateUrl: './listar-programas.component.html',
  styleUrls: ['./listar-programas.component.css']
})
export class ListarProgramasComponent implements OnInit {
  public programas: Array<Programas> = [];
  public nombreProgramas!: string;
  public programasSelected!: Programas;
  public selected: boolean = false;

  constructor(private programasService: ProgramasService) {
    this.programasService.getProgramas().subscribe((programas: Array<Programas>) => {
        this.programas = programas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(programas: Programas) {
    this.programasSelected = programas;
    this.selected = true

    Swal.fire('Detalle del programa', '<table class="table">\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Nombre</th>\n' +
      '    <th scope="col">ID del programa</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td>' + this.programasSelected.nombre + '</td>\n' +
      '      <td>' + this.programasSelected.id + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
  }
  borrarProgramas(programas: Programas) {
    Swal.fire({
      title: "Estas seguro?",
      text: "Usted no puede revertir eso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra el programa!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.programasService.borrarPrograma(programas.id).subscribe(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "El curso ha sido eliminado.",
            icon: "success"
          });
          this.programas = this.programas.filter((c) => c !== programas); // Actualiza la lista de progrmas en la vista
        });
      }
    });
  }

  protected readonly Programas = Programas;
}
