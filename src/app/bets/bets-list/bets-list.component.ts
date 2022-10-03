import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bets-list',
  templateUrl: './bets-list.component.html',
  styleUrls: ['./bets-list.component.css']
})
export class BetsListComponent implements OnInit {

  constructor() { }

  @Input()
  bets;

  ngOnInit(): void {
  }

}
