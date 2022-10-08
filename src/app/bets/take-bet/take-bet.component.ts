import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { makeBetDTO } from '../bets';

@Component({
  selector: 'app-take-bet',
  templateUrl: './take-bet.component.html',
  styleUrls: ['./take-bet.component.css']
})
export class TakeBetComponent implements OnInit {

  constructor(private router: Router) { }

  model: makeBetDTO = {
    teamId: 0,
    betTypeId: 0,
    pointSpreadValue: 500,
    betTypeOptionId: 0,
    modalityId: 1,
    amount: 1500
  };

  ngOnInit(): void {
  }

  title = "Take Bet";

  takeBet(bet: makeBetDTO) {
    // ... save bet taken
    console.log(bet);
    this.router.navigate(['/bets']);
  }

}
