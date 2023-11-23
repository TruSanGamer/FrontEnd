import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programas} from "../model/programas";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseUrl: string = "https://gist.githubusercontent.com/JuanNaranjo01/a7067e4927afdf694afc7cf12068faf8/raw/62eb7429593c1abe91d871b0307274988d70d5fc/gistfile1.txt"



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
