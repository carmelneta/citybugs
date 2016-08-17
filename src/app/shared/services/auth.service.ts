import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {AuthState, LOGOUT, LOGIN, UserCrendetials } from '../reducers/auth.reducer';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public store: Store<AuthState>,
    public af: AngularFire
  ) { 
    store.select('auth');
    this.af.auth.subscribe(auth => {
      // console.log('Auth Changed',auth);
      if(auth) {
          this.store.dispatch({
            type: LOGIN,
            payload: {
              uid : auth.uid
            }
          });
      }else {
        this.store.dispatch({ type: LOGOUT });
      }
    });
  }

  create(user: UserCrendetials) { 
    return this.af.auth.createUser( user );
  }
  
  logOut() {    
    this.af.auth.logout();
  }

  logIn(user: UserCrendetials) { 
    return this.af.auth.login( user );
  }

}
