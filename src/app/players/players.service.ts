import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { playersCreateDTO } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'players';

  public create(player: playersCreateDTO) {
    return this.http.post(this.apiURL, player);
  }
}
