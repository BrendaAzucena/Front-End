import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-soli',
  templateUrl: './modal-soli.component.html',
  styleUrls: ['./modal-soli.component.css']
})
export class ModalSoliComponent {

  modalidad: string = "unidad_economica";
  constructor(
    public dialogRef: MatDialogRef<ModalSoliComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.modalidad) {
      this.modalidad = data.modalidad;
    }

  

}
}
