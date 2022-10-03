import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {

  constructor() { }

  @Input()
  sports;

  ngOnInit(): void {
  }

}
