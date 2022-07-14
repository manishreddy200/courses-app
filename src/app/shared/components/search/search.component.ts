import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() placeHolder = 'Search';
  @Output() searchEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
