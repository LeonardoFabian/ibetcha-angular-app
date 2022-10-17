import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teamsCreateDTO, teamsDTO } from '../teams';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(private router: Router) { }

  model: teamsDTO = {
    name: 'Los Angeles Lakers',
    shortName: 'LAL',
    courtId: 1,
    countryId: 1,
    sportId: 2,
    leagueId: 2,
    colorPrimary: '#552583',
    colorSecondary: '#FDB927',
    logo: 'https://seeklogo.com/images/L/los-angeles-lakers-logo-421B60BCC0-seeklogo.com.png'
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
