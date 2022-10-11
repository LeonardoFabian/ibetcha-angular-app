import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { makeBetDTO } from '../bets';

@Component({
  selector: 'app-bets-form',
  templateUrl: './bets-form.component.html',
  styleUrls: ['./bets-form.component.css']
})
export class BetsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  teams = [
    {id: 1, name: 'Los Angeles Lakers', isHomeTeam: true},
    {id: 2, name: 'Brooklyn Nets', isHomeTeam: false},
  ]

  modalities = [
    {id: 1, name: '1 vs 1'},
    {id: 2, name: 'Team vs Team'},
  ];

  betTypes = [
    {id: 1, name: 'Straight Up Win'},
    {id: 2, name: 'Point Spread'},
  ]

  disclosures = [
    {id: 1, description: 'If bet is not accepted by takers, the funds will be returned to maker within 24 hours since the game started.'},
    {id: 2, description: 'If balance does not reach the amount you want to bet, or such amount is not sufficient, a refill can take place, by clicking the icons in the middle.'},
    {id: 3, description: 'Once the bet is accepted by taker the bet cannot be edited or cancelled.'},
    {id: 4, description: 'Winning bets will be deposit to i-betU Account or Affiliate Bookie Account accordingly within 24hours since the official result has been delivered.'},
    {id: 5, description: 'When sports event has been Canceled the money will be returned to the account where the bet fund was originated (i-betU Account, Affiliate Bookie Account or Bitcoin Account).'},
    {id: 6, description: 'Postponed or rescheduled games will remain in full effect until the date.'},
  ]

  @Input()
  model: makeBetDTO;

  @Output()
  submit: EventEmitter<makeBetDTO> = new EventEmitter<makeBetDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      teamId: 0,
      homeTeamId: 0,
      awayTeamId: 0,
      commenceTime: '',
      betTypeId: 0,
      pointSpreadValue: { value: 0, disabled: true },
      betTypeOptionId: 0,
      modalityId: 0,
      amount: [0.00, {
        validators: [Validators.required, Validators.minLength(2)]
      }],
      rate: 0.00,
      subTotal: 0.00,
      category: '',
      disclosureAccepted: false
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }

    this.form.controls['betTypeId'].valueChanges.subscribe(val => {
      if(val === 2)
      this.form.get('pointSpreadValue').enable();
      else
      this.form.get('pointSpreadValue').disable();
    });

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
