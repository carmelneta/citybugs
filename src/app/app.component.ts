import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MdIcon } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES  } from '@angular2-material/sidenav';

import { AuthService } from './shared/services/auth.service';
 
//  MdSidenav
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [
    MdIcon,
    MD_SIDENAV_DIRECTIVES
  ],
  providers : [ AuthService ]
})
export class AppComponent {
  title = 'app works!';
  items: any;
  constructor(
    af: AngularFire
  ){
    
    // this.items = af.database.list('items').subscribe(x => {
      // console.log(x);
    // });
    // console.log( this.items );
    
  }
}