import { Injectable } from '@angular/core';
import {Asignatura} from "../model/asignatura";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private baseUrl: string = "http://localhost:8080"

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Metodo que obtiene los cursos
   * @returns Observable<Asignatura[]> Lista de cursos
   */
  getAsignaturas(): Observable<Asignatura[]> {
    return this.httpClient.get<Asignatura[]>(this.baseUrl+"/asignaturaes")
      .pipe(
        map((result:any)=>{
          console.log(result._embedded.cursoes);
          return result._embedded.cursoes;
        }));
  }
  getAsignatura(idAsignatura: number): Observable<Asignatura> {
    return this.httpClient.get<Asignatura>(this.baseUrl + '/asignaturaes/' + idAsignatura);
  }


  /**
   * Metodo que crea un curso
   * @param asignatura Curso a crear
   */


  crearAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.httpClient.post<Asignatura>(this.baseUrl+"/asignaturaes", asignatura);
  }
  editarAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.httpClient.put<Asignatura>(this.baseUrl+"/asignaturaes/"+asignatura.id, asignatura);
  }

  borrarAsignatura(idAsignatura: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/asignaturaes/" + idAsignatura);
  }

}
