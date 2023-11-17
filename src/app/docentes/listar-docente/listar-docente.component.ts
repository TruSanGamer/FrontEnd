import {Component, OnInit} from '@angular/core';
import {Docente} from "../model/docente";
import {DocenteService} from "../service/docente.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css']
})
export class ListarDocenteComponent implements OnInit{
  public docentes: Array<Docente> = [];
  public nombreDocente!: string;
  public docenteSelected!: Docente;
  public selected: boolean = false;


  constructor(private docenteService: DocenteService) {
    this.docenteService.getDocentes().subscribe(
      (docentes:Array<Docente>) => {
    this.docentes = docentes;
  }
);

}

ngOnInit():void {
  // this.cursos[0] = {id: 1, curso: 'Angular', programa: 'Ingenieria de sistemas'};
  // this.cursos[1] = {id: 2, curso: 'Java', programa: 'Ingenieria de sistemas'};
  // this.cursos[2] = {id: 3, curso: 'Python', programa: 'Ingenieria de sistemas'};
  // this.cursos[3] = {id: 4, curso: 'C#', programa: 'Ingenieria de sistemas'};
  // this.cursos[4] = {id: 5, curso: 'C++', programa: 'Ingenieria de sistemas'};
}
onSelected(docente: Docente){
    this.docenteSelected = docente;
    this.selected=true;

  Swal.fire('Detalle de los docentes','<table class="table">\n' +
    '  <thead>\n' +
    '  <tr>\n' +
    '    <th scope="col">Cargo</th>\n' +
    '    <th scope="col">Nombre</th>\n' +
    '    <th scope="col">Apellido</th>\n' +
    '    <th scope="col">Telefono</th>\n' +
    '    <th scope="col">Asignatura</th>\n' +
    '    <th scope="col">Correo</th>\n' +
    '    <th scope="col">Facultad</th>\n' +
    '  </tr>\n' +
    '  </thead>\n' +
    '  <tbody>\n' +
    '    <tr>\n' +
    '      <td>'+this.docenteSelected.cargo+'</td>\n' +
    '      <td>'+this.docenteSelected.nombre+'</td>\n' +
    '      <td>'+this.docenteSelected.apellido+'</td>\n' +
    '      <td>'+this.docenteSelected.telefono+'</td>\n' +
    '      <td>'+this.docenteSelected.asignatura+'</td>\n' +
    '      <td>'+this.docenteSelected.correo+'</td>\n' +
    '      <td>'+this.docenteSelected.facultad+'</td>\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>','success');



}
  borrarDocente(docente: Docente) {

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
}


