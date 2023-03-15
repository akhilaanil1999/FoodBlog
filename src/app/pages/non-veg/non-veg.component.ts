import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {
  constructor(private D:ServiceService,private R:Router){}
  nonvegdb=this.D.getData1();
  gotononvegpage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/singlen'])
  }

}
