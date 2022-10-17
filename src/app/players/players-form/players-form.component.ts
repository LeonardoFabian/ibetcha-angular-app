import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { playersCreateDTO, playersDTO } from '../players';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.css']
})
export class PlayersFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: playersDTO;

  @Input()
  errors: string[] = [];

  @Output()
  submit: EventEmitter<playersCreateDTO> = new EventEmitter<playersCreateDTO>();

  heights = [
    {id: 1, name: '6 ft 6 in', value: '1.98 m'},
    {id: 1, name: '6 ft 9 in', value: '2.06 m'},
  ];

  weights = [
    {id: 1, name: '212 lb', value: '96 kg'},
    {id: 1, name: '250 lb', value: '113 kg'},
  ]

  sports = [
    {id: 1, name: 'Baseball'},
    {id: 2, name: 'Basketball'},
    {id: 3, name: 'Soccer'},
    {id: 4, name: 'Tennis'},
  ];

  teams = [
    {id: 1, name: 'Los Angeles Lakers'},
    {id: 2, name: 'Brooklyn Nets'},
    {id: 3, name: 'New York Yankees'},
    {id: 4, name: 'Boston Red Sox'},
    {id: 5, name: 'Tigres del Licey'},
    {id: 6, name: 'Aguilas del Cibao'},
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }],
      birthday: '',
      heightId: 0,
      weightId: 0,
      sportId: 0,
      number: 0,
      teamId: 0,
      photo: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }

  title = 'Players Form';

  selectedImage(file) {
    this.form.get('photo').setValue(file);
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  getNameFieldError() {
    var field = this.form.get('name');

    if (field.hasError('required')) {
      return 'The Player Name is required';
    }
  }

}
