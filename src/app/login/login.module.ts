import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginuserComponent } from './user/loginuser/loginuser.component';
import { LoginComponent } from './admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';

LoginComponent

@NgModule({
  declarations: [
    LoginComponent,
    LoginuserComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],

  exports: [
    LoginComponent,
    LoginuserComponent
  ],
})
export class LoginModule { }
