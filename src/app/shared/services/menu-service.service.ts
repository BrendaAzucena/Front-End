import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('assets/menu.json');
  }
}
