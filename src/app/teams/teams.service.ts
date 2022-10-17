import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { teamsCreateDTO } from './teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'teams';

  public create(team: teamsCreateDTO) {
    return this.http.post(this.apiURL, team);
  }
}
