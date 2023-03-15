import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ordersingle',
  templateUrl: './ordersingle.component.html',
  styleUrls: ['./ordersingle.component.css']
})
export class OrdersingleComponent {
  ingredientsdetails:any
  constructor(private D:ServiceService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData5();
    this.ingredientsdetails=arrd.filter(e=>e.name==idd)
  }

}
