import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamsCreateDTO } from '../teams';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent {

  constructor(private router: Router) { }

  title = 'Create Team';

  store(team: teamsCreateDTO) {
    // console.log(team);
    this.router.navigate(['/teams']);
  }

}
