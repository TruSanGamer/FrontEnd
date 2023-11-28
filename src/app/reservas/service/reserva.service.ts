import { Injectable } from '@angular/core';
import {Reserva} from "../model/reserva";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl: string = "localhost:8081/programa-reservas"

  constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene las reservas
  @returns Observable<reservas[]>
   */
  getReservas(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(this.baseUrl + "/reserva")

  }

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.post<Reserva>(this.baseUrl+"/reserva", reserva);
  }
  editarReserva(idReserva: number, reserva:Reserva): Observable<Reserva> {
    return this.httpClient.put<Reserva>(this.baseUrl+`/reserva/${idReserva}`,reserva);
  }

  borrarReserva(idReserva: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/reserva/" + idReserva);
  }
}
