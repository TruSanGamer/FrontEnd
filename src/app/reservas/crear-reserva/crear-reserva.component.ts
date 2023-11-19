import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservaService} from "../service/reserva.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Reserva} from "../model/reserva";


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit{
  public crearReservaForm!:  FormGroup;
  public formReserva!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private reservaService: ReservaService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearReserva() {
    this.router.navigate(['/listar']);
  }

  crearReserva(reserva: Reserva) {
    this.reservaService.crearReserva(reserva).subscribe(
      (reserva: Reserva)=> {
        console.log(reserva);
        Swal.fire(
          'Asignatura creada',
          `La asignatura ${reserva.sala} ha sido creada con éxito`,
          'success'
        );
        this.crearReservaForm.reset();
      });
  }

  ngOnInit() {
    this.formReserva = this.formBuilder.group({
      asignatura: ['', Validators.required, Validators.minLength(4)],
      id: ['', Validators.required, Validators.minLength(4)]
    });
  }
}
