import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { leagueCreateDTO, leagueDTO } from '../leagues';

@Component({
  selector: 'app-leagues-form',
  templateUrl: './leagues-form.component.html',
  styleUrls: ['./leagues-form.component.css']
})
export class LeaguesFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: leagueDTO

  @Input()
  errors: string[] = [];

  @Output()
  onSubmit: EventEmitter<leagueCreateDTO> = new EventEmitter<leagueCreateDTO>();

  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'Brazil'},
    {id: 3, name: 'Spain'},
    {id: 4, name: 'Dominican Republic'},
  ];

  sports = [
    {id: 1, name: 'Baseball'},
    {id: 2, name: 'Basketball'},
    {id: 3, name: 'Soccer'},
    {id: 4, name: 'Tennis'},
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }],
      shortName: '',
      countryId: 0,
      sportId: 0,
      logo: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  title = 'Leagues Form';

  OnSubmit() {
    this.onSubmit.emit(this.form.value);
  }

  getNameFieldError() {
    var field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The league name is required';
    }

    if (field.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
