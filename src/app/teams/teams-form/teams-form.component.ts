import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { teamsCreateDTO, teamsDTO } from '../teams';

@Component({
  selector: 'app-teams-form',
  templateUrl: './teams-form.component.html',
  styleUrls: ['./teams-form.component.css']
})
export class TeamsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  stadiums = [
    {id: 1, name: 'Crypto Center'},
    {id: 2, name: 'Barclays Center'},
    {id: 3, name: 'Yankee Stadium'},
    {id: 4, name: 'Fenway Park'},
    {id: 5, name: 'Estadio Quisqueya Juan Marichal'},
    {id: 6, name: 'Estadio Cibao'},
  ]

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

  leagues = [
    {id: 1, name: 'MLB'},
    {id: 2, name: 'NBA'},
    {id: 3, name: 'NCAA'},
    {id: 4, name: 'NFL'},
    {id: 5, name: 'LIDOM'},
    {id: 6, name: 'Mundial de Fútbol'},
  ];

  @Input()
  model: teamsDTO;

  @Output()
  submit: EventEmitter<teamsCreateDTO> = new EventEmitter<teamsCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }],
      shortName: '',
      stadiumId: 0,
      countryId: 0,
      sportId: 0,
      leagueId: 0,
      logo: '',
      colorPrimary: '',
      colorSecondary: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  title = 'Teams Form';

  selectedImage(file) {
    this.form.get('logo').setValue(file);
  }

  store() {
    this.submit.emit(this.form.value);
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