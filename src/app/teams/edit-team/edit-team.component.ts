import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from 'src/app/sports/sports.service';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { teamsCreateDTO, teamsDTO } from '../teams';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService
  ) { }

  model: teamsDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.teamsService.getById(params.id)
        .subscribe(team => {
          this.model = team;
        }, () => this.router.navigate(['/teams']));
    });
  }

  title = 'Edit Team';

  store(team: teamsCreateDTO) {
    this.teamsService.edit(this.model.id, team)
    .subscribe(() => {
      this.router.navigate(['/teams']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
