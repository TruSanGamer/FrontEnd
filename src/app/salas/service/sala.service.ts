import { Injectable } from '@angular/core';
import {Sala} from "../model/sala";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private baseUrl: string = "https://gist.githubusercontent.com/JTINEV/22b10f2a13c64348545e23844f2654f3/raw/5197bbc48804cd40e22a2afdf2f584a334cac028/gistfile1.txt"

  constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene las asignaturas
  @returns Observable<Asignatura[]>
   */
  getSalas(): Observable<Sala[]>{
    return this.httpClient.get<Sala[]>(this.baseUrl);
  }

  crearSala(sala: Sala): Observable<Sala> {
    return this.httpClient.post<Sala>(this.baseUrl, sala);
  }
}
