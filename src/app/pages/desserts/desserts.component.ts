import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {
  constructor(private D:ServiceService,private R:Router){}
  dessertdb=this.D.getData3();
  gotodessertspage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/singled'])
  }


}
