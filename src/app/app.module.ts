import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule  } from '@angular2-material/icon';
import { MdSidenavModule  } from '@angular2-material/sidenav';
import { MdToolbarModule  } from '@angular2-material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
