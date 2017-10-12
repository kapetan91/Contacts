import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ContactDetailsComponent } from '../components/contact-details/contact-details.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

const appRoutes:Routes = [
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  declarations: [
    ContactsListComponent,
    MessagesComponent,
    LayoutComponent,
    ContactDetailsComponent,
    NavBarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class AppRoutingModule { }
