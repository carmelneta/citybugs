import { Routes, RouterModule }   from '@angular/router';

import { AppComponent } from '../app.component';
import { SingInComponent } from '../sing-in/sing-in.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sign-in',
    component : SingInComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);