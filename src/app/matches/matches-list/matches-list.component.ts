import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  constructor() { }
  @Input()
  matches;

  ngOnInit(): void {

  }

  makeBet(matchId: number) : void{
    this.matches.splice(matchId, 1);
  }

}
