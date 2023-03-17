import { Injectable } from '@angular/core';
import { vegdb } from 'src/assets/data/data';
import { nonvegdb } from 'src/assets/data/nveg';
import { snackdb } from 'src/assets/data/snack';
import { dessertdb } from 'src/assets/data/dessertdb';
import { seafooddb } from 'src/assets/data/seafood';
import { ingredientsdb } from 'src/assets/data/utils';
import { Firestore,collectionData,collection,addDoc,getFirestore } from '@angular/fire/firestore';
import { Auth,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userid:any;
  db:any=getFirestore()

  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }
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

insertData(docRef:any,data:any)
{
  addDoc(docRef,data).then(()=>{alert("successfull")}).catch((err)=>alert(err))
}
insertdata(docRef:any,data:any)
  {
    addDoc(docRef,data)
    .then(()=>{alert("your feedback recorded successfully")})
    .catch((err) => alert(err))

  }

  submit(cred:any){
    createUserWithEmailAndPassword(this.auth,cred.email,cred.password).then(
      ()=>{
        this.userid=this.auth.currentUser?.uid;
        const userDetails={
          uid:this.userid,
          email:cred.email,
          name:cred.name,
        };
        const docRef=collection(this.firestore,'users');
        addDoc(docRef,userDetails).then(()=>{})
        .catch((err)=>console.log(err.message));
        alert("user created successfully");
        this.router.navigate(['/home']);
      }
    );
  }

}
