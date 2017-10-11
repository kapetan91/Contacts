import { Injectable } from '@angular/core';
import { contacts } from '../contacts'

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
  	return contacts;
  }

}
