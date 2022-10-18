import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toNumberFormat } from '../utils/helpers';
import { leagueCreateDTO } from './leagues';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'leagues';

  public getAll(page: number, itemsPerPage) : Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('itemsPerPage', itemsPerPage.toString());
    return this.http.get(this.apiURL, {observe: 'response', params});
  }

  public create(league: leagueCreateDTO) {
    const formData = this.setFormData(league);
    return this.http.post(this.apiURL, formData);
  }

  public setFormData(league: leagueCreateDTO): FormData {
    const formData = new FormData();

    if (league.name) {
      formData.append('name', league.name);
    }

    if (league.shortName) {
      formData.append('shortName', league.shortName);
    }

    if (league.countryId) {
      formData.append('countryId', toNumberFormat(league.countryId));
    }

    if (league.sportId) {
      formData.append('sportId', toNumberFormat(league.sportId));
    }

    if (league.logo) {
      formData.append('logo', league.logo);
    }

    return formData;
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
