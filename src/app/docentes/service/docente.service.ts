import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Docente} from "../model/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private baseUrl: string="https://gist.githubusercontent.com/Jcamiloag/3e88024b7e0c5e49970faad9705632a9/raw/041b6a8b3a0496fbf6f3b17f19140559941b362a/gistfile1.txt"

  constructor(private httpClient: HttpClient) {

  }

  getDocentes():Observable<Docente[]>{
    return  this.httpClient.get<Docente[]>(this.baseUrl+"/docentees")
      .pipe(
        map((result:any)=>{
          console.log(result._embedded.docentees);
          return result._embedded.docentees;
        }));
  }
  getDocente(idDocente: number ): Observable<Docente>{
    return this.httpClient.get<Docente>(this.baseUrl + '/docentees/'+idDocente);
  }


  crearDocente(docente: Docente):Observable<Docente> {
    return this.httpClient.post<Docente>(this.baseUrl+"/docentees", docente);

  }
  borrarDocente(idDocente: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/docentees/" + idDocente);
  }

  editarDocente(docente: Docente): Observable<Docente>{
  return this.httpClient.put<Docente>(this.baseUrl+"/docentees"+ docente.id, docente);
  }
}
