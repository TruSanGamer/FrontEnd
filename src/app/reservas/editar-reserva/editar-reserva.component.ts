/*

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Reserva} from "../model/reserva";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservaService} from "../service/reserva.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit{

  // Creamos e inicializamos el formulario editarAsignaturaForm usando el constructor de FormGroup
  public editarReservaForm: FormGroup= new FormGroup({
    sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
    fechaInicio: new FormControl('',[Validators.required,Validators.minLength(4)]),
    fechaFinalizacion: new FormControl('',[Validators.required,Validators.minLength(4)]),
    detalle: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });

  // Creamos un atributo (relacion) asignatura que es el que vamos a editar
  public reserva!: Reserva;

  /!**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de asignatura
   * @param asignaturaService Servicio de asignatura para crear un curso
   * @param route Ruta del componente
   *!/
  constructor(public router: Router, public formBuilder: FormBuilder, private reservaService: ReservaService, private route: ActivatedRoute) {

  }

  /!**
   * Metodo que cancela la edicion de un asignatura
   *!/
  cancelarEditarReserva() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /!**
   * Metodo que edita una asignatura en el servicio
   * @param reserva asignatura a crear
   *!/
  editarReserva(reserva: Reserva) {
    this.reservaService.editarReserva(reserva).subscribe( // Le decimos al servicio que edite la reserva
      (reserva: Reserva) => {
        // console.log(curso);
        Swal.fire( // Le decimos al usuario que la reserva ha sido editado
          'reserva editada',
          `La reserva ${reserva.sala} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }

  /!**
   * Metodo que se ejecuta al iniciar el componente
   *!/

  ngOnInit(): void {
    const salaReserva = parseInt(this.route.snapshot.params['id']); // Obtenemos el id del curso a editar

    this.reservaService.getReserva(salaReserva).subscribe((reserva) => { // Le decimos al servicio que nos traiga el curso a editar
      this.reserva = reserva; // Obtenemos el curso a editar
      // console.log(this.curso);
      this.editarReservaForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm
        sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
        fechaInicio: new FormControl('',[Validators.required,Validators.minLength(4)]),
        fechaFinalizacion: new FormControl('',[Validators.required,Validators.minLength(4)]),
        detalle: new FormControl('',[Validators.required,Validators.minLength(4)]),
      });
    });
  }

}

*/
