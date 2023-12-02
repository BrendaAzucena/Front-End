import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';
import { Oficina } from '../interfaces/oficina';
import { Datosge } from '../interfaces/datosg';
import { UnidadEconomicaPA } from '../interfaces/unidadE';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  path = `${environment.API_URL}unidades_economicas_pa_fisico`;

  constructor(private http: HttpClient) { }

  getUni(){
    return this.http.get(this.path);
  }


  //Datos generalesPaFissica
  agreDa(dat: Datosge): Observable<Datosge>{
    return this.http.post<Datosge>(`${this.path}`, dat)
  }
  
  gettUnidad(UEPAid:any):Observable<UnidadEconomicaPA>{
    return this.http.get<UnidadEconomicaPA>(this.path+'/'+UEPAid);  
  }

  agreUni(uni: UnidadEconomicaPA):Observable<UnidadEconomicaPA>{
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
    return this.http.post<UnidadEconomicaPA>(direccion, uni)
  }

  editUnidadF(id: any ,put:  UnidadEconomicaPA):Observable<UnidadEconomicaPA>{
    let direccion = this.path+"/"+ id;
    return this.http.put<UnidadEconomicaPA>(direccion, put)
  }

  getIdUnidadF(id:any):Observable<UnidadEconomicaPA>{
    return this.http.get<UnidadEconomicaPA>(this.path+'/'+id);  
  }
  //localidad
  getLoc(){
    return this.http.get('http://localhost:8000/api/localidades');
  }
  //Municipio
  getMuni(){
    return this.http.get('http://localhost:8000/api/municipios');
  }

  getOfi(){
    return this.http.get('http://localhost:8000/api/oficinas');
  }
 
  agreOfi(ofi: Oficina):Observable<Oficina>{
    let direccion = "http://localhost:8000/api/oficinas";
    return this.http.post<Oficina>(direccion, ofi)
  }

  getId(id:any):Observable<Oficina>{
    return this.http.get<Oficina>(this.path+'/'+id);  
  }

 
  editOfi(id: any ,put:  Oficina):Observable<Oficina>{
    let direccion = this.path+"/"+ id;
    return this.http.put<Oficina>(direccion, put)
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }

}
