import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { sportCreateDTO } from '../sports';

@Component({
  selector: 'app-sports-form',
  templateUrl: './sports-form.component.html',
  styleUrls: ['./sports-form.component.css']
})
export class SportsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];

  @Input()
  model: sportCreateDTO;

  @Output()
  onSubmit: EventEmitter<sportCreateDTO> = new EventEmitter<sportCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  title = 'Sports Form';

  store() {
    this.onSubmit.emit(this.form.value);
  }

  getNameFieldError() {
    var field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The name field is required';
    }

    if (field.hasError('minlength')) {
      return 'Minimun length is three characters';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
