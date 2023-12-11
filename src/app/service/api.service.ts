import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../interfaces/roles';
import { Oficina } from '../interfaces/oficina';
import { Datosge } from '../interfaces/datosg';
import { UnidadEconomicaPA } from '../interfaces/unidadE';
import { artePesca } from '../interfaces/artePesca';
import { especies } from '../interfaces/especies';
import { productos } from '../interfaces/productos';
import { unidadMoral } from '../interfaces/unidadMoral';
import { socios } from '../interfaces/socios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  path = `${environment.API_URL}unidades_economicas_pa_fisico`;

  constructor(private http: HttpClient) { }

  getUni() {
    return this.http.get(this.path);
  }


  //Datos generalesPaFissica
  agreDa(dat: Datosge): Observable<Datosge> {
    return this.http.post<Datosge>(`${this.path}`, dat)
  }

  gettUnidad(UEPAid: any): Observable<UnidadEconomicaPA> {
    return this.http.get<UnidadEconomicaPA>(this.path + '/' + UEPAid);
  }

  agreUni(uni: UnidadEconomicaPA): Observable<UnidadEconomicaPA> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
    return this.http.post<UnidadEconomicaPA>(direccion, uni)
  }

  editUnidadF(id: any, put: UnidadEconomicaPA): Observable<UnidadEconomicaPA> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico" + "/" + id;
    return this.http.put<UnidadEconomicaPA>(direccion, put)
  }

  getIdUnidadF(id: any): Observable<UnidadEconomicaPA> {
    return this.http.get<UnidadEconomicaPA>('http://localhost:8000/api/unidades_economicas_pa_fisico' + '/' + id);
  }
  //Datos generalesPaMoral
  getMoral() {
    return this.http.get('http://localhost:8000/api/unidades_economicas_pa_moral');
  }

  getIdUnidadM(id: any): Observable<unidadMoral> {
    return this.http.get<unidadMoral>('http://localhost:8000/api/unidades_economicas_pa_moral' + '/' + id);
  }

  agreMoral(moral: unidadMoral): Observable<unidadMoral> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_moral";
    return this.http.post<unidadMoral>(direccion, moral)
  }

  editUnidadM(id: any, put: unidadMoral): Observable<unidadMoral> {
    let direccion = "http://localhost:8000/api/unidades_economicas_pa_moral" + "/" + id;
    return this.http.put<unidadMoral>(direccion, put)
  }
  //Socio Moral
  agreSocio(socio: socios): Observable<socios> {
    let direccion = "http://localhost:8000/api/socios_detalles_pa_moral";
    return this.http.post<socios>(direccion, socio)
  }
  //Arte_Pesca 
  agreArt(pesca: artePesca): Observable<artePesca> {
    let direccion = "http://localhost:8000/api/artes_pesca";
    return this.http.post<artePesca>(direccion, pesca)
  }
  getArt() {
    return this.http.get('http://localhost:8000/api/artes_pesca');
  }

  delete(id: any): Observable<any> {
    let direccion = "http://localhost:8000/api/artes_pesca";
    return this.http.delete<any>(direccion + '/' + id);
  }
  //Especies 
  agreEsp(especie: especies): Observable<especies> {
    let direccion = "http://localhost:8000/api/especies";
    return this.http.post<especies>(direccion, especie)
  }

  getEspecie() {
    return this.http.get('http://localhost:8000/api/especies');
  }
  //Productos
  agreProduc(producto: productos): Observable<productos> {
    let direccion = "http://localhost:8000/api/productos";
    return this.http.post<productos>(direccion, producto)
  }
  getProd() {
    return this.http.get('http://localhost:8000/api/productos');
  }
  //localidad
  getLoc() {
    return this.http.get('http://localhost:8000/api/localidades');
  }
  //Municipio
  getMuni() {
    return this.http.get('http://localhost:8000/api/municipios');
  }

  getOfi() {
    return this.http.get('http://localhost:8000/api/oficinas');
  }

  agreOfi(ofi: Oficina): Observable<Oficina> {
    let direccion = "http://localhost:8000/api/oficinas";
    return this.http.post<Oficina>(direccion, ofi)
  }

  getId(id: any): Observable<Oficina> {
    return this.http.get<Oficina>(this.path + '/' + id);
  }


  editOfi(id: any, put: Oficina): Observable<Oficina> {
    let direccion = this.path + "/" + id;
    return this.http.put<Oficina>(direccion, put)
  }

  eliminar(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

}
