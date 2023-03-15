import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { OrdersingleComponent } from './ordersingle/ordersingle.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { NonVegComponent } from './pages/non-veg/non-veg.component';
import { SeafoodComponent } from './pages/seafood/seafood.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { SingleComponent } from './single/single.component';
import { SingledComponent } from './singled/singled.component';
import { SinglenComponent } from './singlen/singlen.component';
import { SinglesComponent } from './singles/singles.component';
import { SinglesdComponent } from './singlesd/singlesd.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {

  path:'', component:HomeComponent
  },
  {

  path:'home', component:HomeComponent
  },

  {
    path:'aboutus', component:AboutusComponent
  },
  {
    path:'veg',component:VegComponent
  },
  {
    path:'non-veg',component:NonVegComponent
  },
  {
    path:'snacks',component:SnacksComponent
  },
  {
    path:'desserts',component:DessertsComponent
  },
  {
    path:'seafood',component:SeafoodComponent
  },
  {
    path:'ingredients',component:IngredientsComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'singlen',component:SinglenComponent
  },
  {
    path:'singles',component:SinglesComponent
  },
  {
    path:'singled',component:SingledComponent
  },
  {
    path:'singlesd',component:SinglesdComponent
  },
  {
    path:'ordersingle',component:OrdersingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
