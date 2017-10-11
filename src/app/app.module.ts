import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { ContactsService } from './services/contacts.service';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    ContactsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
