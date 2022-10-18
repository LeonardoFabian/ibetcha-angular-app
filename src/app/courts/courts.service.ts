import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toNumberFormat } from '../utils/helpers';
import { courtCreateDTO } from './courts';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'courts';

  public getAll(page: number, itemsPerPage) : Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('itemsPerPage', itemsPerPage.toString());
    return this.http.get(this.apiURL, {observe: 'response', params});
  }

  public create(court: courtCreateDTO) {
    const formData = this.setFormData(court);
    return this.http.post(this.apiURL, formData);
  }

  public setFormData(court: courtCreateDTO): FormData {
    const formData = new FormData();

    if (court.name) {
      formData.append('name', court.name);
    }

    if (court.photo) {
      formData.append('photo', court.photo);
    }

    if (court.latitude) {
      formData.append('latitude', JSON.stringify(court.latitude));
    }

    if (court.longitude) {
      formData.append('longitude', JSON.stringify(court.longitude));
    }

    return formData;
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
