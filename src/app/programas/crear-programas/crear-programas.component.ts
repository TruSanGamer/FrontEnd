import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProgramasService} from "../service/programas.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Programas} from "../model/programas";


@Component({
  selector: 'app-crear-programas',
  templateUrl: './crear-programas.component.html',
  styleUrls: ['./crear-programas.component.css']
})
export class CrearProgramasComponent implements OnInit{
  public crearProgramasForm!:  FormGroup;
  public formProgramas!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private programaService: ProgramasService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearProgramas() {
    this.router.navigate(['/listar']);
  }

  crearProgramas(programas: Programas) {
    this.programasService.crearProgramas(programas).subscribe(
      (programas: Programas)=> {
        console.log(programas);
        Swal.fire(
          'Programa creado',
          `El programa ${programas.nombre} ha sido creado con éxito`,
          'success'
        );
        this.crearProgramasForm.reset();
      });
  }

  ngOnInit() {
    this.formProgramas = this.formBuilder.group({
      programas: ['', Validators.required, Validators.minLength(4)],
      id: ['', Validators.required, Validators.minLength(4)]
    });
  }
}
