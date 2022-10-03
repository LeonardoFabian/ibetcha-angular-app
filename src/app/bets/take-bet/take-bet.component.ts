import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-take-bet',
  templateUrl: './take-bet.component.html',
  styleUrls: ['./take-bet.component.css']
})
export class TakeBetComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
    })
  }

  take() {
    // ... save bet taken
    // this.router.navigate(['/bets'])
  }

}
