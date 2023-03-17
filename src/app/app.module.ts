import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { VegComponent } from './veg/veg.component';
import { SingleComponent } from './single/single.component';
import { NonVegComponent } from './pages/non-veg/non-veg.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { SeafoodComponent } from './pages/seafood/seafood.component';
import { SinglenComponent } from './singlen/singlen.component';
import { SinglesComponent } from './singles/singles.component';
import { SingledComponent } from './singled/singled.component';
import { SinglesdComponent } from './singlesd/singlesd.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { OrdersingleComponent } from './ordersingle/ordersingle.component';
import { SinglepayComponent } from './singlepay/singlepay.component';
import { SafePipe } from './safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    FeedbackComponent,
    SignupComponent,
    RecepiesComponent,
    VegComponent,
    SingleComponent,
    NonVegComponent,
    SnacksComponent,
    DessertsComponent,
    SeafoodComponent,
    SinglenComponent,
    SinglesComponent,
    SingledComponent,
    SinglesdComponent,
    IngredientsComponent,
    OrdersingleComponent,
    SinglepayComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
