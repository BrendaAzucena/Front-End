import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalSoliComponent } from '../modal-soli/modal-soli.component';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {}; 
  
    const dialogRef = this.dialog.open(ModalSoliComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }
  
  
  
}
