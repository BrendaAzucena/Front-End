import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudComponent } from './page/person/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/person/uniconomica/uniconomica.component';
import { LoginuserComponent } from './login/user/loginuser/loginuser.component';
import { LoginComponent } from './login/admin/login/login.component';
import { EmbarcamayorComponent } from './page/person/embarcamayor/embarcamayor.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbarcamenorComponent } from './page/person/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './page/person/instalacuicola/instalacuicola.component';
import { PanelComponent } from './page/admin/panel/panel.component';
import { OficinasComponent } from './page/admin/unidadeconomica/oficinas/oficinas.component';
import { EditOficinaComponent } from './page/admin/unidadeconomica/edit-oficina/edit-oficina.component';
import { CrearOficinaComponent } from './page/admin/unidadeconomica/crear-oficina/crear-oficina.component';
import { EditUnidadFComponent } from './page/person/edit-unidad-f/edit-unidad-f.component';
import { ArtePComponent } from './page/admin/arte-p/arte-p.component';
import { EspeciesComponent } from './page/admin/especies/especies.component';
import { ProductosComponent } from './page/admin/productos/productos.component';
import { UniconomicaMoralComponent } from './page/person/uniconomica-moral/uniconomica-moral.component';
import { SocioComponent } from './page/person/socio/socio.component';


LoginComponent
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'solicitud',
    component:SolicitudComponent
  },
  {
    path:'uniconomica',
    component:UniconomicaComponent
  },
  {
    path:'uniconomicamoral',
    component:UniconomicaMoralComponent
  },
  {
    path:'uniconomicaF/:id',
    component:EditUnidadFComponent
  },
  {
    path:'loginuser',
    component:LoginuserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'embarcamayor',
    component:EmbarcamayorComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'embarcamenor',
    component:EmbarcamenorComponent
  },
  {
    path:'instalacuicola',
    component:InstalacuicolaComponent
  },

  {
    path:'panel',
    component:PanelComponent
  },
  {
    path:'oficinas',
    component:OficinasComponent
  },
  {
    path:'edit-oficina/:id',
    component:EditOficinaComponent
  },
  {
    path:'agregarOfi',
    component:CrearOficinaComponent
  }
  ,
  {
    path:'aretePes',
    component:ArtePComponent
  },
  {
    path:'especies',
    component:EspeciesComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'socios/:id',
    component:SocioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
