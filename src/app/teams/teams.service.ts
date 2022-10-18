import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toNumberFormat } from '../utils/helpers';
import { teamsCreateDTO } from './teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'teams';

  public getAll(page: number, itemsPerPage) : Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('itemsPerPage', itemsPerPage.toString());
    return this.http.get(this.apiURL, {observe: 'response', params});
  }

  public create(team: teamsCreateDTO) {
    const formData = this.setFormData(team);
    return this.http.post(this.apiURL, formData);
  }

  public setFormData(team: teamsCreateDTO): FormData {
    const formData = new FormData();

    formData.append('name', team.name);

    if (team.shortName) {
      formData.append('shortName', team.shortName);
    }

    if (team.courtId) {
      formData.append('courtId', toNumberFormat(team.courtId));
    }

    if (team.countryId) {
      formData.append('countryId', toNumberFormat(team.countryId));
    }

    if (team.sportId) {
      formData.append('sportId', toNumberFormat(team.sportId));
    }

    if (team.leagueId) {
      formData.append('leagueId', toNumberFormat(team.leagueId));
    }

    if (team.primaryColor) {
      formData.append('primaryColor', team.primaryColor);
    }

    if (team.secondaryColor) {
      formData.append('secondaryColor', team.secondaryColor);
    }

    if (team.logo) {
      formData.append('logo', team.logo);
    }

    return formData;
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
