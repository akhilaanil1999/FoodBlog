import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ingredientsdb } from 'src/assets/data/utils';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  constructor(private D:ServiceService,private R:Router){}
  ingredientsdb=this.D.getData5();
  gotoingredientspage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/ordersingle'])
  }

}
