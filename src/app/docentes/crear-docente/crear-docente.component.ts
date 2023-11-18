import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DocenteService} from "../service/docente.service";
import Swal from "sweetalert2";
import {Docente} from "../model/docente";

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls : ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{

  public crearDocenteForm!: FormGroup;


  constructor(public router: Router,public formBuilder: FormBuilder, private docenteService: DocenteService) {
  }

  cancelarCrearDocente() {
    this.router.navigate(['/listar']);
  }

  crearDocente(docente: Docente) {
    this.docenteService.crearDocente(docente).subscribe(
      (docente: Docente) => {
        console.log(docente);
        Swal.fire(
          'Usuario creado',
          `El docente ${docente.nombre} ha sido creado con exito`,
          'success'
        );
        this.crearDocenteForm.reset();
      });
  }

  ngOnInit(): void {
    this.crearDocenteForm = this.formBuilder.group({
      docente: ['', Validators.required, Validators.minLength(4)],
      programa: ['', Validators.required, Validators.minLength(4)]
    });
  }

}
