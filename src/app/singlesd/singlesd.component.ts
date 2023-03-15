import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-singlesd',
  templateUrl: './singlesd.component.html',
  styleUrls: ['./singlesd.component.css']
})
export class SinglesdComponent {
  seafooddetails:any
  link:any
  vdoUrl:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData4();
    this.seafooddetails=arrd.filter(e=>e.name==idd)
    this.vdoUrl="https://www.youtube.com/embed/"
  }

}
