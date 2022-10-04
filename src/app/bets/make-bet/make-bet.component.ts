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
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Brooklyn Nets',
    amount: ''
  };

  title = 'Make Bet';

  makeBet(bet: makeBetDTO) {
    // ... save bet made
    console.log(bet);
    // this.router.navigate(['/bets'])
  }

}
