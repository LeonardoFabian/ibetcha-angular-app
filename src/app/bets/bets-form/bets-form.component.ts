import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { makeBetDTO } from '../bets';

@Component({
  selector: 'app-bets-form',
  templateUrl: './bets-form.component.html',
  styleUrls: ['./bets-form.component.css']
})
export class BetsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  modalities = [
    {id: 1, name: '1 vs 1'},
    {id: 2, name: 'Team vs Team'},
  ];

  @Input()
  model: makeBetDTO;

  @Output()
  submit: EventEmitter<makeBetDTO> = new EventEmitter<makeBetDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      teamId: 0,
      type: '',
      pointSpreadValue: 0,
      amount: [0.00, {
        validators: [Validators.required, Validators.minLength(2)]
      }],
      rate: 0.00,
      subTotal: 0.00,
      modalityId: 0,
      category: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  makeBet() {
    this.submit.emit(this.form.value);
  }


  getErrorAmountField() {
    var field = this.form.get('amount');

    if (field.hasError('required')) {
      return 'The amount field is required';
    }
    if (field.hasError('minlength')) {
      return 'The minimun bet amount is ten (10)';
    }
    return '';
  }

}
