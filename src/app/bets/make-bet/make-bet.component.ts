import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { makeBetDTO } from '../bets';

@Component({
  selector: 'app-make-bet',
  templateUrl: './make-bet.component.html',
  styleUrls: ['./make-bet.component.css']
})
export class MakeBetComponent {

  constructor(private router: Router) { }

  model: makeBetDTO = {
    teamId: 0,
    homeTeamId: 0,
    awayTeamId: 0,
    betTypeId: 0,
    pointSpreadValue: 0,
    betTypeOptionId: 0,
    modalityId: 0,
    amount: 0,
    disclosureAccepted: false
  };

  title = 'Make your bet';

  makeBet(bet: makeBetDTO) {
    // ... save bet made
    console.log(bet);
    // this.router.navigate(['/bets'])
  }

}
