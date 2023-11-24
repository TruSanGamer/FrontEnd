import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programa} from "../model/programa";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseUrl: string = "http://3.145.90.209:8081/api/programa-service"



  constructor(private httpClient: HttpClient) {

  }

  /*
  Método que obtiene los programas
  @returns Observable<Programas[]>
   */
  getProgramas(): Observable<Programa[]>{
    return this.httpClient.get<Programa[]>(this.baseUrl+"/programa");
  }

  crearProgramas(programas: Programa): Observable<Programa> {
    return this.httpClient.post<Programa>(this.baseUrl+"/programa", programas);
  }

  borrarPrograma(idPrograma: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/programa/" + idPrograma)
  }
}
