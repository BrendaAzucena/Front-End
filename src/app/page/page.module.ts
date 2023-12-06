import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './person/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './person/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './person/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './admin/panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OficinasComponent } from './admin/unidadeconomica/oficinas/oficinas.component';
import { EditOficinaComponent } from './admin/unidadeconomica/edit-oficina/edit-oficina.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CrearOficinaComponent } from './admin/unidadeconomica/crear-oficina/crear-oficina.component';
import { ModalSoliComponent } from './person/modal-soli/modal-soli.component';
import { EditUnidadFComponent } from './person/edit-unidad-f/edit-unidad-f.component';
import { ArtePComponent } from './admin/arte-p/arte-p.component';
import { EspeciesComponent } from './admin/especies/especies.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { UniconomicaMoralComponent } from './person/uniconomica-moral/uniconomica-moral.component';

@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
    EmbarcamenorComponent,
    InstalacuicolaComponent,
    PanelComponent,
    OficinasComponent,
    EditOficinaComponent,
    CrearOficinaComponent,
    ModalSoliComponent,
    EditUnidadFComponent,
    ArtePComponent,
    EspeciesComponent,
    ProductosComponent,
    UniconomicaMoralComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,
  
]
})
export class PageModule { }


