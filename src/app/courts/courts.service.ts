import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { courtCreateDTO } from './courts';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'courts';

  public create(court: courtCreateDTO) {
    return this.http.post(this.apiURL, court);
  }
}
