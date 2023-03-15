import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-singles',
  templateUrl: './singles.component.html',
  styleUrls: ['./singles.component.css']
})
export class SinglesComponent {
  snackdetails:any
  link:any
  vdoUrl:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData2();
    this.snackdetails=arrd.filter(e=>e.name==idd)
    this.vdoUrl="https://www.youtube.com/embed/"
  }


}
