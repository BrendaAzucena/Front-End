import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormUni=this.formulario.group({
    FechaRegistro: [''],
    Ofcid: [''],
    RNPA: [''],
    RFC: [''],
    CURP: [''],
    Nombres: [''],
    ApPaterno: [''],
    ApMaterno: [''],
    FechaNacimiento: [''],
    Sexo: [''],
    GrupoSanguineo: [''],
    Email: [''],
    Calle: [''],
    NmExterior: [''],
    NmInterior: [''],
    CodigoPostal: [''],
    Locid: [''],
    IniOperaciones: [''],
    ActivoEmbMayor: [false],
    ActivoEmbMenor: [false],
    ActvAcuacultura: [false],
    ActvPesca: [false],
    DocActaNacimiento: [''],
    DocComprobanteDomicilio: [''],
    DocCURP: [''],
    DocIdentificacionOfc: [''],
    DocRFC: [''],
     });
     console.log(this.FormUni);
}
  
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

enviar(): any {
  console.log(this.FormUni.value);
  this.api.agreUni(this.FormUni.value).subscribe(() => {
    this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
      this.router.navigate(['solicitud']);
      this.mostrarSnackBar('SE AGREGO CON EXTITO', 'success-snackbar');
    });
  });
}

mostrarSnackBar(mensaje: string, clase: string): void {
  this.snackBar.open(mensaje, '', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: [clase],
  });
}

}


