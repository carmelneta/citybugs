import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../shared/reducers/auth.reducer';
import { AuthService } from '../shared/services/auth.service';


import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
@Component({
  selector: 'app-sing-in',
  templateUrl: 'sing-in.component.html',
  styleUrls: ['sing-in.component.css'],
  providers : [AuthService]
})
export class SingInComponent implements OnInit {
  model:any;
  errorMsg: string;
  isLogedIn: Boolean = false;

  constructor(
    public store: Store<AuthState>,
    private auth : AuthService
  ) {

    store.select('auth')
      .subscribe(  (x:AuthState) => {
        // console.log('Auth Store Sied', x);        
        this.isLogedIn = x.loged;          
      });

    this.model = {
      email: '',
      password: ''
    }   

  }

  onSubmit() {
    this.logIn();    
  }

  logOut(){
    this.auth.logOut();    
  }

  logIn() {
    this.auth.logIn({
      email: this.model.email,
      password: this.model.password
    })
      .then(
        null, 
        error => this.errorMsg = error.message
      );      
  }

  create() {
    this.auth.create({
      email: this.model.email,
      password: this.model.password
    })
      .then(
        results => console.log(results), 
        msg => this.errorMsg = msg.message
      );  
  }

  ngOnInit() { }

}
