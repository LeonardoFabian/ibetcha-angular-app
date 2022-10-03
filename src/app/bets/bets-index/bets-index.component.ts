import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bets-index',
  templateUrl: './bets-index.component.html',
  styleUrls: ['./bets-index.component.css']
})
export class BetsIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.todayBets = [
      {
        homeTeam: 'Los Angeles Lakers',
        homeTeamIcon: 'https://seeklogo.com/images/L/los-angeles-lakers-logo-421B60BCC0-seeklogo.com.png',
        awayTeam: 'Brooklyn Nets',
        awayTeamIcon: 'https://www.seekpng.com/png/detail/69-698457_brooklyn-nets-symbol-brooklyn-nets.png',
        commenceTime: new Date(),
        stadium: 'Crypto Center'
      }
    ]
  }

  todayBets;

}
