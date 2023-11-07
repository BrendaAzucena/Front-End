import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { unidad } from '../admin/interfaces/unidad';
import { Observable } from 'rxjs';
import { Oficina } from '../admin/interfaces/Oficina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}oficinas`;

  constructor(private http: HttpClient) { }

  getUni(){
    return this.http.get(this.path);
  }

  /*agregar(uni: unidad): Observable<unidad>{
    return this.http.post<unidad>(`${this.path}`, uni)
  }*/

  getOfi(){
    return this.http.get('http://siipo.test/api/oficinas');
  }
 
  agreOfi(ofi: Oficina): Observable<Oficina>{
    return this.http.post<Oficina>(`${this.path}`, ofi)
  }

  getId(id: any): Observable<any>{
    return this.http.get<any>(this.path+'/'+id);  
  }

 
  editOfi(id: any ,put:  Oficina):Observable<any>{
    let direccion = this.path+"/"+ id;
    return this.http.put<any>(direccion, put)
  }

  eliminar(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }
  
}


