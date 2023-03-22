import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';


@Component({
  selector: 'app-ordersingle',
  templateUrl: './ordersingle.component.html',
  styleUrls: ['./ordersingle.component.css']
})
export class OrdersingleComponent {
  ingredientsdetails:any
  constructor(private D:ServiceService,private fire:Firestore){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.D.getData5();
    this.ingredientsdetails=arrd.filter(e=>e.name==idd)
  }

  firstname:string='';
  lastname:string='';
  username:string='';
  email:string='';
  address:string='';
  address2:string='';
  country:string='';
  state:string='';
  credit:string='';
  debit:string='';
  paypal:string='';
  name:string='';
  number:string='';
  date:string='';
  cvv:string='';

  submit()
  {
    const data={
    firstname:this.firstname,
    lastname:this.lastname,
    username:this.username,
    email:this.email,
    address:this.address,
    address2:this.address2,
    country:this.country,
    state:this.state,
  
    name:this.name,
    number: this.number,
    date:this.date,
    cvv:this.cvv,
    }
    console.log(data);
    const docRef=collection(this.fire,"odersingle")
    this.D.insertData(docRef,data)
    this.firstname=''
    this.lastname=''
    this.username=''
    this.email=''
    this.address=''
    this.address2=''
    this.country=''
    this.state=''
    this.credit=''
    this.debit=''
    this.paypal=''
    this.name=''
    this.date=''
    this.cvv=''
    alert( 'ordersuccess')
  }

  }