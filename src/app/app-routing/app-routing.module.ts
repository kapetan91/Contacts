import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { LayoutComponent } from '../layout/layout.component';

const appRoutes:Routes = [
 { path: 'contacts', component: ContactsListComponent },
 { path: 'contact/:id', component: ContactDetalisComponent },
 { path: 'messages', component: MessagesComponent },
 { path: '', redirectTo: '/contacts', pathMatch: 'full'}
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	appRoutes
    )
  ],
  declarations: [
  ContactsListComponent,
  MessagesComponent,
  LayoutComponent
  ], 
  exports: [
  LayoutComponent
  ],
})
export class AppRoutingModule { }
