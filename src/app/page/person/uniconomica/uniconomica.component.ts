import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-uniconomica',
  templateUrl: './uniconomica.component.html',
  styleUrls: ['./uniconomica.component.css']
})
export class UniconomicaComponent implements OnInit {
  localidades: any[] = [];
  oficinas: any[] = [];
  municipios: any[] = [];
  FormUni:FormGroup;
  constructor(private  api:ApiService,private router:Router, public formulario:FormBuilder){ }
  
  
  ngOnInit(): void {
    this.getLocalidades();
    this.getOficinas();
    this.getMunicipios();
  }

  getLocalidades(): void {
    this.api.getLoc().subscribe((response: any) => {
      this.localidades = response.data;
      console.log('Localidades:', this.localidades);
    });
  }

  getOficinas(): void {
    this.api.getOfi().subscribe((response: any) => {
      this.oficinas = response.data;
      console.log('Oficinas:', this.oficinas);
    });
  }

getMunicipios(): void {
  this.api.getMuni().subscribe((response: any) => {
    this.municipios = response.data;
    console.log('Municipios:', this.municipios);
  });
}
}


