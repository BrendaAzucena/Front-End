import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-soli',
  templateUrl: './modal-soli.component.html',
  styleUrls: ['./modal-soli.component.css']
})
export class ModalSoliComponent {
  tipoSolicitud: string = '';
  modalidad: string = "unidad_economica";
  constructor(
    public dialogRef: MatDialogRef<ModalSoliComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    if (data && data.modalidad) {
      this.modalidad = data.modalidad;
    }
  }

  onAceptarClick() {
    switch (this.tipoSolicitud) {
      case 'alta':
        this.router.navigate(['uniconomica']);
        break;
      case 'modificarRFC':
        // Agrega lógica específica para la modalidad modificarRFC
        break;
      case 'modificarEmail':
        // Agrega lógica específica para la modalidad modificarEmail
        break;
      case 'modificarColaboradores':
        // Agrega lógica específica para la modalidad modificarColaboradores
        break;
      case 'modificarDireccion':
        // Agrega lógica específica para la modalidad modificarDireccion
        break;
      default:
        // Manejar caso por defecto si es necesario
        break;
    }
    this.dialogRef.close();
  }

}
