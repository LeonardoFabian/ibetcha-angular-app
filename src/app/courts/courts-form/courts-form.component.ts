import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordinates } from 'src/app/utils/map/coordinates';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { courtCreateDTO, courtDTO } from '../courts';

@Component({
  selector: 'app-courts-form',
  templateUrl: './courts-form.component.html',
  styleUrls: ['./courts-form.component.css']
})
export class CourtsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: courtDTO;

  @Input()
  errors: string[] = [];

  @Output()
  onSubmit: EventEmitter<courtCreateDTO> = new EventEmitter<courtCreateDTO>();

  courtCoordinates: Coordinates[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }],
      photo: '',
      latitude: '',
      longitude: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.courtCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  title = 'Courts Form';

  selectedImage(file) {
    this.form.get('photo').setValue(file);
  }

  selectedCoordinates(coordinates: Coordinates) {
    this.form.patchValue(coordinates);
  }

  OnSubmit() {
    this.onSubmit.emit(this.form.value);
  }

  getNameFieldError() {
    var field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The place name is required';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
