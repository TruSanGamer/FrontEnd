import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {ReservaService} from "../service/reserva.service";
import {Reserva} from "../model/reserva";


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  public crearReservaForm: FormGroup= new FormGroup({

    id:new FormControl(""),
    nombresolicitante:new FormControl(""),
    fecha:new FormControl(""),
    sala:new FormControl(""),
    hora:new FormControl(""),
    estado:new FormControl("")
  });
  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param asignaturaService Servicio de curso para crear un curso
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private reservaService: ReservaService) {

  }
  cancelarCrearReserva() {
    this.router.navigate(['/listar']);
  }

  crearReserva(reserva: Reserva) {
    this.reservaService.crearReserva(reserva).subscribe(
      (reserva: Reserva) => {
        // console.log(curso);
        Swal.fire(
          'reserva creada',
          `La reserva ${reserva.id} ha sido creado con exito`,
          'success'
        );
        this.crearReservaForm.reset();  //Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }

  ngOnInit(): void {
    this.crearReservaForm = this.formBuilder.group({
      nombresolicitante: [Validators.required,Validators.minLength(4)],
      fecha: [Validators.required,Validators.minLength(4)],
      sala: [Validators.required,Validators.minLength(4)],
      hora: [Validators.required,Validators.minLength(4)]

    });
  }
}
