import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  UniMoral: any[] = [];
  FormSocio:FormGroup;
  constructor(private snackBar: MatSnackBar, private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormSocio=this.formulario.group({
  UEPAMid: [''],
  CURP: [''],
  ActvPesca: [false],
  ActvAcuacultura: [false],
  DocActaNacimiento: [''],
  DocComprobanteDomicilio: [''],
  DocCURP: [''],
  DocIdentificacionOfc: [''],
  DocRFC: [''],
     });
     console.log(this.FormSocio);
}
  
  ngOnInit(): void {
    this.getUnidadMoral();
  }
  
  getUnidadMoral(): void {
    this.api.getMoral().subscribe((response: any) => {
      this.UniMoral = response.data;
      console.log('UEDuenoid:', this.UniMoral);
    });
  }

  enviar(): any {
    console.log(this.FormSocio.value);
    this.api.agreSocio(this.FormSocio.value).subscribe(() => {
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


