import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Docente} from "../model/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private baseUrl: string="https://gist.githubusercontent.com/Jcamiloag/3e88024b7e0c5e49970faad9705632a9/raw/c5c44d40f35bf3a3bbdf5bdba183475bc25ff26d/gistfile1.txt"

  constructor(private httpClient: HttpClient) {

  }

  getDocentes():Observable<Docente[]>{
    return  this.httpClient.get<Docente[]>(this.baseUrl)
  }


}
