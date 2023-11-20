import { Injectable } from '@angular/core';
import {Sala} from "../model/sala";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private baseUrl: string = "https://gist.githubusercontent.com/jonathanColorado/748fb008c821f91adf82ec068cd92618/raw/e150f58456ac3ca3ff194e8e5305f0732bf9fa93/gistfile1.txt"

  constructor(private httpClient: HttpClient) {

  }


  getSalas(): Observable<Sala[]>{
    return this.httpClient.get<Sala[]>(this.baseUrl);
  }

  crearSala(sala: Sala): Observable<Sala> {
    return this.httpClient.post<Sala>(this.baseUrl, sala);
  }
}
