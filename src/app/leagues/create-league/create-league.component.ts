import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { leagueCreateDTO } from '../leagues';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  constructor(private leaguesService: LeaguesService, private router: Router) { }

  ngOnInit(): void {
  }

  title = 'Create League';

  errors = [];

  store(league: leagueCreateDTO) {
    this.leaguesService.create(league)
    .subscribe(() => {
      this.router.navigate(['/leagues']);
    }, errors => this.errors = parseErrorsFromAPI(errors))
  }

}
