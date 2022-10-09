import { Component, OnInit } from '@angular/core';
import { leagueCreateDTO, leagueDTO } from '../leagues';

@Component({
  selector: 'app-edit-league',
  templateUrl: './edit-league.component.html',
  styleUrls: ['./edit-league.component.css']
})
export class EditLeagueComponent implements OnInit {

  constructor() { }

  model: leagueDTO = {
    name: 'Liga Dominicana de Baseball',
    shortName: 'LIDOM',
    countryId: 4,
    sportId: 1,
    logo: ''
  };

  ngOnInit(): void {
  }

  title = 'Edit League';

  store(league: leagueCreateDTO) {
    console.log(league);
  }

}
