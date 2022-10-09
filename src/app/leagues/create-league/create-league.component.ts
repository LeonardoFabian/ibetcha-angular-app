import { Component, OnInit } from '@angular/core';
import { leagueCreateDTO } from '../leagues';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Create League';

  store(league: leagueCreateDTO) {
    console.log(league);
  }

}
