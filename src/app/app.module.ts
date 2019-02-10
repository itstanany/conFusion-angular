import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import angular animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import angulat material toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
// import flex-layput module
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
// import hammerjs
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

