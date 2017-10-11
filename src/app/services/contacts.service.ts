import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
  	return[
  	{ id: 1, name: 'John' },
  	{ id: 2, name: 'Doe' }
  	];
  }

}
