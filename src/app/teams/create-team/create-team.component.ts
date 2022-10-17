import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { teamsCreateDTO } from '../teams';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit(): void {
  }

  title = 'Create Team';

  errors = [];

  store(team: teamsCreateDTO) {
    this.teamsService.create(team)
    .subscribe(() => {
      this.router.navigate(['/teams']);
    }, errors => this.errors = parseErrorsFromAPI(errors))
  }

}
