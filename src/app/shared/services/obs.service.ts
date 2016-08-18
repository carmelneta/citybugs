
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {AuthState, LOGOUT, LOGIN, UserCrendetials } from '../reducers/auth.reducer';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Ob } from '../models/ob.model';

@Injectable()
export class ObsService {

  obs:any;

  constructor(
    public af: AngularFire
  ) { 
    this.obs = af.database.list('/obs');
  }

  add(ob:Ob) {

    console.log(ob);

    this.obs.push(ob);
  }

}
