import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudComponent } from './page/admin/solicitud/solicitud.component';
import { UniconomicaComponent } from './page/admin/uniconomica/uniconomica.component';
import { LoginuserComponent } from './login/user/loginuser/loginuser.component';
import { LoginComponent } from './login/admin/login/login.component';
import { EmbarcamayorComponent } from './page/admin/embarcamayor/embarcamayor.component';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbarcamenorComponent } from './page/admin/embarcamenor/embarcamenor.component';
import { InstalacuicolaComponent } from './page/admin/instalacuicola/instalacuicola.component';
import { EditOfiComponent } from './page/admin/edit-ofi/edit-ofi.component';
import { ShowOfiComponent } from './page/admin/show-ofi/show-ofi.component';


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
    path:'editOfi/:id',
    component:EditOfiComponent
  },
  {
    path:'show/:ofiid',
    component:ShowOfiComponent
  },

  
  
  
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
