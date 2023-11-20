import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalaService} from "../service/sala.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Sala} from "../model/sala";


@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit{
  public crearSalaForm!:  FormGroup;
  public formSala!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private salaService: SalaService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearSala() {
    this.router.navigate(['/listar']);
  }

  crearSala(sala: Sala) {
    this.salaService.crearSala(sala).subscribe(
      (sala: Sala)=> {
        console.log(sala);
        Swal.fire(
          'Sala creada',
          `La Sala ${sala.nombre} ha sido creada con éxito`,
          'success'
        );
        this.crearSalaForm.reset();
      });
  }

  ngOnInit() {
    this.formSala = this.formBuilder.group({
      sala: ['', Validators.required, Validators.minLength(4)],
      id: ['', Validators.required, Validators.minLength(4)]
    });
  }
}
