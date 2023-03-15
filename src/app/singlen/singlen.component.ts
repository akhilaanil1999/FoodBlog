import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-singlen',
  templateUrl: './singlen.component.html',
  styleUrls: ['./singlen.component.css']
})
export class SinglenComponent {
  nonvegdetails:any
  link:any
  vdoUrl:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData1();
    this.nonvegdetails=arrd.filter(e=>e.name==idd)
    this.vdoUrl="https://www.youtube.com/embed/"
  }

}
