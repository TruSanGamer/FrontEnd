import {Component, OnInit} from '@angular/core';
import {ProgramasService} from "../service/programas.service";
import Swal from "sweetalert2";
import {Programa} from "../model/programa";

@Component({
  selector: 'app-listar-programas',
  templateUrl: './listar-programas.component.html',
  styleUrls: ['./listar-programas.component.css']
})
export class ListarProgramasComponent implements OnInit {
  public programas: Array<Programa> = [];
  public nombreProgramas!: string;
  public programasSelected!: Programa;
  public selected: boolean = false;

  constructor(private programasService: ProgramasService) {
    this.programasService.getProgramas().subscribe((programas: Array<Programa>) => {
        this.programas = programas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(programas: Programa) {
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
      '      <td>' + this.programasSelected.programa + '</td>\n' +
      '      <td>' + this.programasSelected.id + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
  }
  borrarProgramas(programas: Programa) {
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

  editarProgramas(programas: Programa) {
    Swal.fire({
      title: 'Editar programa',
      html:
        '<p>ID del programa: <strong>' + programas.id + '</strong></p>' +
        '<input id="nombre" class="swal2-input" placeholder="Nombre" value="' + programas.programa + '">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;

        const programaActualizado: Programa = { id: programas.id, programa: nombre };

        this.programasService.editarPrograma(programas.id, programaActualizado).subscribe(() => {
          Swal.fire('Editado!', 'El programa ha sido editado correctamente.', 'success');
          // Actualiza la lista de programas en la vista o realiza alguna acción adicional
        });
      }
    });
  }

  protected readonly Programas = Programa;
}
