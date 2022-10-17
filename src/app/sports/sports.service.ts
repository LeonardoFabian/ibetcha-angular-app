import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { sportDTO, sportCreateDTO } from './sports';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'sports';

  public getAll(page: number, itemsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('ItemsPerPage', itemsPerPage.toString());
    return this.http.get<sportDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public getById(id: number): Observable<sportDTO> {
    return this.http.get<sportDTO>(`${this.apiURL}/${id}`);
  }

  public create(sport: sportCreateDTO) {
    return this.http.post(this.apiURL, sport);
  }

  public edit(id: number, sport: sportCreateDTO) {
    return this.http.put(`${this.apiURL}/${id}`, sport);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
