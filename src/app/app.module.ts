
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { CreaterendezvousComponent } from './components/createrendezvous/createrendezvous.component';
import { CreerclientComponent } from './components/creerclient/creerclient.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {  HttpClientModule } from '@angular/common/http';


import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import{environment} from '../environments/environment'
import { from } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RendezvousComponent,
    CreaterendezvousComponent,
    CreerclientComponent,
    ClientsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
