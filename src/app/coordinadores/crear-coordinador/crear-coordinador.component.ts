import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CoordinadorService} from "../service/coordinador.service";
import Swal from "sweetalert2";
import {Coordinador} from "../model/coordinador";


@Component({
  selector: 'app-crear-coordinador',
  templateUrl: './crear-coordinador.component.html',
  styleUrls : ['./crear-coordinador.component.css']
})
export class CrearCoordinadorComponent implements OnInit{

  public crearCoordinadorForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    cargo: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
    asignatura: new FormControl('',[Validators.required,Validators.minLength(4)]),
    correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
    facultad: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  constructor(public router: Router,public formBuilder: FormBuilder, private coordinadorService: CoordinadorService) {
  }

  cancelarCrearCoordinador() {
    this.router.navigate(['/listar']);
  }

  crearCoordinador(coordinador: Coordinador) {
    this.coordinadorService.crearCoordinador(coordinador).subscribe(
      (coordinador: Coordinador) => {
        //console.log(docente);
        Swal.fire(
          'Usuario creado',
          `El coordinador ${coordinador.nombre} ha sido creado con exito`,
          'success'
        );
        this.crearCoordinadorForm.reset();
        this.router.navigate(['/listar'])
      });
  }

  ngOnInit(): void {
    this.crearCoordinadorForm = this.formBuilder.group({
      id: new FormControl('',[Validators.required,Validators.minLength(4)]),
      cargo: new FormControl('',[Validators.required,Validators.minLength(4)]),
      nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
      apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
      telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
      asignatura: new FormControl('',[Validators.required,Validators.minLength(4)]),
      correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
      facultad: new FormControl('',[Validators.required,Validators.minLength(4)])
    });
  }

}
