import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  message:string='';
  constructor(public service:ServiceService,private fire:Firestore)
  {}
  submit()
{
  const data = {
    message:this.message
  }
  console.log(data);
  const docRef = collection(this.fire,"feedbackdata")
  this.service.insertdata(docRef,data)
  this.message='';
}
}
