import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-uniconomica-moral',
  templateUrl: './uniconomica-moral.component.html',
  styleUrls: ['./uniconomica-moral.component.css']
})
export class UniconomicaMoralComponent implements OnInit {
  localidades: any[] = [];
  Dueno: any[] = [];
  oficinas: any[] = [];
  FormUniMoral:FormGroup;
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormUniMoral=this.formulario.group({
  UEDuenoid: [''],
  Ofcid: [''],
  FechaRegistro: [this.obtenerFechaActual()],
  RNPA: [''],
  RFC: [''],
  RazonSocial: [''],
  Email: [''],
  Calle: [''],
  NmExterior: [''],
  NmInterior: [''],
  CodigoPostal: [''],
  Locid: [''],
  NmPrincipal: [''],
  TpNmPrincipal: [''],
  NmSecundario: [''],
  TpNmSecundario: [''],
  IniOperaciones: [''],
  ActivoEmbMayor: [false],
  ActivoEmbMenor: [false],
  ActvAcuacultura: [false],
  ActvPesca: [false],
  DocRepresentanteLegal: [''],
  DocActaConstitutiva: [''],
  DocActaAsamblea: [''],
     });
     console.log(this.FormUniMoral);
}
  
  ngOnInit(): void {
    this.getLocalidades();
    this.getOficinas();
    this.getUEDuenoid();
  }

  obtenerFechaActual(): string {
    const fechaActual = new Date();
    return fechaActual.toISOString().substring(0, 10); 
  }

  getUEDuenoid(): void {
    this.api.getUni().subscribe((response: any) => {
      this.Dueno = response.data;
      console.log('UEDuenoid:', this.Dueno);
    });
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


enviar(): any {
  console.log(this.FormUniMoral.value);
  this.api.agreMoral(this.FormUniMoral.value).subscribe(() => {
    this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
      this.router.navigate(['solicitud']);
      this.mostrarSnackBar('SE AGREGO CON ÉXITO', 'success-snackbar');
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


