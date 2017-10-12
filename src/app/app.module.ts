import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './services/contacts.service';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
