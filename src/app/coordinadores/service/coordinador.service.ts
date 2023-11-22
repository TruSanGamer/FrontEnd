import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Coordinador} from "../model/coordinador";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {
  private baseUrl: string="https://gist.githubusercontent.com/Jcamiloag/3e88024b7e0c5e49970faad9705632a9/raw/041b6a8b3a0496fbf6f3b17f19140559941b362a/gistfile1.txt"

  constructor(private httpClient: HttpClient) {

  }

  getCoordinadores():Observable<Coordinador[]>{
    return  this.httpClient.get<Coordinador[]>(this.baseUrl+"/coordinadores")
      .pipe(
        map((result:any)=>{
          console.log(result._embedded.docentees);
          return result._embedded.docentees;
        }));
  }
  getCoordinador(idCoordinador: number ): Observable<Coordinador>{
    return this.httpClient.get<Coordinador>(this.baseUrl + '/coordinadores/'+idCoordinador);
  }


  crearCoordinador(coordinador: Coordinador):Observable<Coordinador> {
    return this.httpClient.post<Coordinador>(this.baseUrl+"/coordinadores", coordinador);

  }
  borrarCoordinador(idCoordinador: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/coordinadores/" + idCoordinador);
  }

  editarCoordinador(coordinador: Coordinador): Observable<Coordinador>{
    return this.httpClient.put<Coordinador>(this.baseUrl+"/coordinadores"+ coordinador.id, coordinador);
  }
}
