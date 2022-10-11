import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { makeBetDTO, takeBetDTO } from '../bets';

@Component({
  selector: 'app-take-bet',
  templateUrl: './take-bet.component.html',
  styleUrls: ['./take-bet.component.css']
})
export class TakeBetComponent implements OnInit {

  constructor(private router: Router) { }

  model: takeBetDTO = {
    teamId: 2,
    homeTeamId: 0,
    awayTeamId: 0,
    betTypeId: 2,
    pointSpreadValue: 500,
    betTypeOptionId: 2,
    modalityId: 1,
    amount: 1500,
    disclosureAccepted: true
  };

  ngOnInit(): void {
  }

  title = "Take this bet";

  takeBet(bet: makeBetDTO) {
    // ... save bet taken
    console.log(bet);
    this.router.navigate(['/bets']);
  }

}
