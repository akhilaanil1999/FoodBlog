import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string='';
  email:string='';
  number:string='';
  message:string='';
  constructor(private fire:Firestore,public hero:ServiceService){}

  submit()
{
  const data={
    name:this.name,
    email:this.email,
    number:this.number,
    message:this.message,
  }
  console.log(data);
  const docRef=collection(this.fire,"contact")
  this.hero.insertData(docRef,data)
  this.name=''
  this.email=''
  this.number=''
  this.message=''

}
}
