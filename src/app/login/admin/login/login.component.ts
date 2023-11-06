import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../servicio/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  data:  any[]=[];
  constructor(private  api:ApiserviceService,private router:Router){}

  ngOnInit(): void {
    this.roles();

  } 

  roles(){
    this.api.getRoles().subscribe((response: any) => { 
      this.data = response.data;
      console.log(response);
    })
  }

}
