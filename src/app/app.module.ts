import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule  } from '@angular2-material/icon';
import { MdSidenavModule  } from '@angular2-material/sidenav';
import { MdToolbarModule  } from '@angular2-material/toolbar';

import { AngularFireModule } from 'angularfire2';
import { routing, appRoutingProviders } from './shared/app.routing';
import { SingInComponent } from './sing-in/sing-in.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
  
const firebaseConfig = {
  apiKey: "AIzaSyCfswrgYqcAVVCwx5WWjwWzko5sMooCgSw",
  authDomain: "citybugs-7737e.firebaseapp.com",
  databaseURL: "https://citybugs-7737e.firebaseio.com",
  storageBucket: "citybugs-7737e.appspot.com",
}

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent, HomeComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
