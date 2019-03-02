/**
 * this file is the root module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import angular animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import angulat material toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
//  import material grid list library
import { MatGridListModule } from '@angular/material/grid-list';
// import thr card module library
import { MatCardModule } from '@angular/material/card';
// import button module
import { MatButtonModule } from '@angular/material/button';
// import form modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
// importing reactive forms
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
// import flex-layput module
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
// import hammerjs
import 'hammerjs';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';

import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';

// importing Dialog Module
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
/**
 * @NgModule decorator  is a function that takes a single metadata object, whose properties are describe the module
 * it's a decorator that definies the class immediately below it as an "NgModule class"
 */
@NgModule({
  /**
   * the directives, components, pipes that belong to this module
   */
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  /**
   * other modules whose exported classes are needed by component templates declared in this NgModule
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent
  ],
  /**
   * creators of services, that this NgModule contributes to the global collection of services;
   * they become accessible in all parts of the app
   * you can also specift providers at the component level, which is preferred
   */
  providers: [DishService,
  PromotionService,
  LeaderService,
  ProcessHTTPMsgService,
  { provide: 'BaseURL', useValue: baseURL }
  ],
  /**
   * the main application view, which is called "root component" which hosts all other app views
   * only the root NgModule should set "bootstrap" property
   */
  bootstrap: [AppComponent]
})
/**
 * the root module
 * it is an "NgModule class"
 * this particular class is the "root NgModule", and we launch the app by bootstraping this "roo NgModule"
 */
export class AppModule { }

