import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teamsCreateDTO } from '../teams';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(private router: Router) { }

  model: teamsCreateDTO = {
    name: 'Los Angeles Lakers',
    countryId: 1,
    sportId: 2,
    leagueId: 2
  };

  ngOnInit(): void {
  }

  store(team: teamsCreateDTO) {
    // ... update team data
    console.log(team);
    this.router.navigate(['/teams']);
  }

  title = 'Edit Team';

}
