import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name:string='';
  email:string='';
  password:string='';
  cpassword:string='';
  constructor(private auth:ServiceService){}

submit()
{
const crud =
{
  name:this.name,
  email:this.email,
  password:this.password,
  cpassword:this.cpassword
}
this.auth.submit(crud);
this.name='';
this.email='';
this.password='';
this.cpassword='';

}
}
