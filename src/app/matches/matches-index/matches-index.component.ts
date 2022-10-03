import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-index',
  templateUrl: './matches-index.component.html',
  styleUrls: ['./matches-index.component.css']
})
export class MatchesIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.todayMatches = [{
      homeTeam: 'Los Angeles Lakers',
      homeTeamIcon: 'https://seeklogo.com/images/L/los-angeles-lakers-logo-421B60BCC0-seeklogo.com.png',
      awayTeam: 'Brooklyn Nets',
      awayTeamIcon: 'https://www.seekpng.com/png/detail/69-698457_brooklyn-nets-symbol-brooklyn-nets.png',
      commenceTime: new Date(),
      stadium: 'Crypto Center'
    },
    {
      homeTeam: 'New York Yankees',
      homeTeamIcon: 'https://az1.hatstoremedia.com/hatstore/images/image-new-york-yankees-kepsar-2017-02-21-125003849/261/261/0/new-york-yankees-kepsar.png',
      awayTeam: 'Boston Red Sox',
      awayTeamIcon: 'http://sportslogohistory.com/wp-content/uploads/2018/01/boston_red_sox_2009-pres_a.png',
      commenceTime: new Date(),
      stadium: 'Yankee Stadium'
    },];
  }

  todayMatches;
}
