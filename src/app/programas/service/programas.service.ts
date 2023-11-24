import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programas} from "../model/programas";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseUrl: string = "http://3.145.90.209:8081/api/programa-service/programas"



  constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene los programas
  @returns Observable<Programas[]>
   */
  getProgramas(): Observable<Programas[]>{
    return this.httpClient.get<Programas[]>(this.baseUrl);
  }

  crearProgramas(programas: Programas): Observable<Programas> {
    return this.httpClient.post<Programas>(this.baseUrl, programas);
  }

  borrarPrograma(idPrograma: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + idPrograma)
  }
}
