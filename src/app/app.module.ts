//  Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//  Routing
import { Routes, RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './shared/app.routing';

//  NGRX
import { Store, StoreModule } from '@ngrx/store';

//  Material
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule  } from '@angular2-material/icon';
import { MdSidenavModule  } from '@angular2-material/sidenav';
import { MdToolbarModule  } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
import { MdCardModule } from '@angular2-material/card';
//  FireBase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


//  Components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AddObComponent } from './obs/add-ob/add-ob.component'

//  Reducers
import { authReducer } from './shared/reducers/auth.reducer';


const firebaseConfig = {
  apiKey: "AIzaSyCfswrgYqcAVVCwx5WWjwWzko5sMooCgSw",
  authDomain: "citybugs-7737e.firebaseapp.com",
  databaseURL: "https://citybugs-7737e.firebaseio.com",
  storageBucket: "citybugs-7737e.appspot.com",
}


const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent, HomeComponent, AddObComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),    
    StoreModule.provideStore( {auth : authReducer} ),
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    
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
