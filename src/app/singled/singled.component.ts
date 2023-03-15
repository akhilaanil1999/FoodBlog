import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-singled',
  templateUrl: './singled.component.html',
  styleUrls: ['./singled.component.css']
})
export class SingledComponent {
  dessertdetails:any
  link:any
  vdoUrl:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData3();
    this.dessertdetails=arrd.filter(e=>e.name==idd)
    this.vdoUrl="https://www.youtube.com/embed/"
  }


}
