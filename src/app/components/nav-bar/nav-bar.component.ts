import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	@Output() search = new EventEmitter();
	searchTerm:string;

  constructor() { }

  ngOnInit() {
  }

  handleSearch() {
    this.search.emit(this.searchTerm);
  }
}
