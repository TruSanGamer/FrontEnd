import { Injectable } from '@angular/core';
import {Reserva} from "../model/reserva";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl: string = "https://gist.githubusercontent.com/jonathanColorado/42875592add75854ae14c20948bd6a08/raw/3b2d0a837c772d93a580c0561b2d7056eb0fe3b2/gistfile1.txt"

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
