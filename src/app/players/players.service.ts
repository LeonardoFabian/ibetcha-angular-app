import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toDateFormat, toNumberFormat } from '../utils/helpers';
import { playersCreateDTO, playersDTO } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'players';

  public getAll(page: number, itemsPerPage: number) : Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('itemsPerPage', itemsPerPage.toString());
    return this.http.get<playersDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public create(player: playersCreateDTO) {
    const formData = this.setFormData(player);
    return this.http.post(this.apiURL, formData);
  }

  public setFormData(player: playersCreateDTO): FormData {
    const formData = new FormData();

    if (player.name) {
      formData.append('name', player.name);
    }

    if (player.born) {
      formData.append('born', toDateFormat(player.born));
    }

    if (player.heightId) {
      formData.append('heightId', toNumberFormat(player.heightId));
    }

    if (player.weightId) {
      formData.append('weightId', toNumberFormat(player.weightId));
    }

    if (player.sportId) {
      formData.append('sportId', toNumberFormat(player.sportId));
    }

    if (player.teamId) {
      formData.append('teamId', toNumberFormat(player.teamId));
    }

    if (player.number) {
      formData.append('number', toNumberFormat(player.number));
    }

    if (player.photo) {
      formData.append('photo', player.photo);
    }

    return formData;
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
