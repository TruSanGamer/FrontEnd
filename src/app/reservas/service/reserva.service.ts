import { Injectable } from '@angular/core';
import {Reserva} from "../model/reserva";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl: string = "https://gist.githubusercontent.com/jonathanColorado/a3a0e4c564caab179140a4a6f8acb887/raw/0f48f012752aec78e1b8610713059d152630037a/gistfile1.txt"

    constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene las asignaturas
  @returns Observable<Asignatura[]>
   */
  getReservas(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(this.baseUrl);
  }

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.post<Reserva>(this.baseUrl, reserva);
  }
}
