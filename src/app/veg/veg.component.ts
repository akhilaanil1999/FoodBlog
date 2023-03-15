import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent {
  constructor(private D:ServiceService,private R:Router){}
  vegdb=this.D.getData();
  gotovegpage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/single'])
  }

}
