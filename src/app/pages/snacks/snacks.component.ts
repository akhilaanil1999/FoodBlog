import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {
  constructor(private D:ServiceService,private R:Router){}
  snackdb=this.D.getData2();
  gotosnackspage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/singles'])
  }

}
