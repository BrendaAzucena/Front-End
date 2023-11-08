import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniconomicaComponent } from './admin/unidadeconimica/uniconomica/uniconomica.component';
import { SharedModule } from '../shared/shared.module';
import { SolicitudComponent } from './admin/solicitud/solicitud.component';
import { EmbarcamayorComponent } from './admin/embarcamayor/embarcamayor.component';
import { EmbarcamenorComponent } from './admin/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './admin/instalacuicola/instalacuicola.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarOfiComponent } from './admin/unidadeconimica/agregar-ofi/agregar-ofi.component';
import { EditOfiComponent } from './admin/unidadeconimica/edit-ofi/edit-ofi.component';


@NgModule({
  declarations: [
    SolicitudComponent ,
    UniconomicaComponent,
    EmbarcamayorComponent,
    EmbarcamenorComponent,
    InstalacuicolaComponent,
    EditOfiComponent,
    AgregarOfiComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
,
exports: [
  SolicitudComponent ,
  UniconomicaComponent,
  
]
})
export class PageModule { }


