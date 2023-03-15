import { Injectable } from '@angular/core';
import { vegdb } from 'src/assets/data/data';
import { nonvegdb } from 'src/assets/data/nveg';
import { snackdb } from 'src/assets/data/snack';
import { dessertdb } from 'src/assets/data/dessertdb';
import { seafooddb } from 'src/assets/data/seafood';
import { ingredientsdb } from 'src/assets/data/utils';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getData(){
    return vegdb
  }
  getData1(){
    return nonvegdb
  }
  getData2(){
    return snackdb
  }
  getData3(){
    return dessertdb
  }
  getData4(){
    return seafooddb
  }
  getData5(){
    return ingredientsdb
  }



  
}
