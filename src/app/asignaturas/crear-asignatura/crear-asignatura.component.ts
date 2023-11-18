import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AsignaturaService} from "../service/asignatura.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Asignatura} from "../model/asignatura";


@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit{
  public crearAsignaturaForm!:  FormGroup;
  public formAsignatura!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private asignaturaService: AsignaturaService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearAsignatura() {
    this.router.navigate(['/listar']);
  }

  crearAsignatura(asignatura: Asignatura) {
    this.asignaturaService.crearAsignatura(asignatura).subscribe(
      (asignatura: Asignatura)=> {
        console.log(asignatura);
        Swal.fire(
          'Asignatura creada',
          `La asignatura ${asignatura.nombre} ha sido creada con éxito`,
          'success'
        );
        this.crearAsignaturaForm.reset();
      });
  }

ngOnInit() {
  this.formAsignatura = this.formBuilder.group({
    asignatura: ['', Validators.required, Validators.minLength(4)],
    id: ['', Validators.required, Validators.minLength(4)]
  });
  }
}
