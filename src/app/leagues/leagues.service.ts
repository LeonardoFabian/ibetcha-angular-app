import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { leagueCreateDTO } from './leagues';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'leagues';

  public create(league: leagueCreateDTO) {
    return this.http.post(this.apiURL, league);
  }
}
