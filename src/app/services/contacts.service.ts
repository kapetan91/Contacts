import { Injectable } from '@angular/core';
import { contacts } from '../contacts';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class ContactsService {
  searchData  = new BehaviorSubject<string>('');


  constructor() { }

  getContacts():Array<Object> {
    return contacts;
  }

  search(term){
  	this.searchData.next(term);
  }

  getSearchTerm() {
  	return this.searchData;
  }
}
