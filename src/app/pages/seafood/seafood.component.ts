import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css']
})
export class SeafoodComponent {
  constructor(private D:ServiceService,private R:Router){}
  seafooddb=this.D.getData4();
  gotoseafoodpage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/singlesd'])
  }


}
