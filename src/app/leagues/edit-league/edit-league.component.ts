import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { leagueCreateDTO, leagueDTO } from '../leagues';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-edit-league',
  templateUrl: './edit-league.component.html',
  styleUrls: ['./edit-league.component.css']
})
export class EditLeagueComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private leaguesService: LeaguesService
  ) { }

  model: leagueDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.leaguesService.getById(params.id)
      .subscribe(league => {
        this.model = league;
      }, () => this.router.navigate(['/leagues']));
    });
  }

  title = 'Edit League';

  store(league: leagueCreateDTO) {
    this.leaguesService.edit(this.model.id, league)
    .subscribe(() => {
      this.router.navigate(['/leagues']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
