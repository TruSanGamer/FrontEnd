import { Injectable } from '@angular/core';
import {Reserva} from "../model/reserva";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl: string = "http://localhost:8080"

  constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene las reservas
  @returns Observable<reservas[]>
   */
  getReservas(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(this.baseUrl + "/Reserva")
      .pipe(
        map((result: any) => {
          console.log(result._embedded.cursoes);
          return result._embedded.cursoes;
        }));
  }
  getReserva(salaReserva: number): Observable<Reserva> {
    return this.httpClient.get<Reserva>(this.baseUrl + '/reservas/' + salaReserva);
  }


  /**
   * Metodo que crea un curso
   * @param asignatura Curso a crear
   */

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.post<Reserva>(this.baseUrl+"/reservas", reserva);
  }
  editarReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.put<Reserva>(this.baseUrl+"/reservas/"+reserva.sala, reserva);
  }

  borrarReserva(salaReserva: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/asignaturaes/" + salaReserva);
  }
}
