import { Component } from '@angular/core';

import { MdIcon } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES  } from '@angular2-material/sidenav';
 
//  MdSidenav
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [
    MdIcon,
    MD_SIDENAV_DIRECTIVES
  ]
})
export class AppComponent {
  title = 'app works!';
}
