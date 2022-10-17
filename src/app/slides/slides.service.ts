import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { toNumberFormat } from '../utils/helpers';
import { slideCreationDTO } from './slides';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'slides';

  public create(slide: slideCreationDTO) {
    const formData = this.setFormData(slide);
    return this.http.post(this.apiURL, formData);
  }

  public setFormData(slide: slideCreationDTO): FormData {
    const formData = new FormData();

    formData.append('title', slide.title);

    if (slide.description) {
      formData.append('description', slide.description);
    }

    if (slide.image) {
      formData.append('image', slide.image);
    }

    if (slide.link) {
      formData.append('link', slide.link);
    }

    if (slide.linkText) {
      formData.append('linkText', slide.linkText);
    }

    if (slide.linkTargetId) {
      formData.append('linkTargetId', toNumberFormat(slide.linkTargetId));
    }

    if (slide.styleId) {
      formData.append('styleId', toNumberFormat(slide.styleId));
    }

    return formData;

  }
}
