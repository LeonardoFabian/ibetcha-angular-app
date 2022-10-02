import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.todayMatches = [{
        title: 'Los Angeles Lakers @ Brooklyn Nets',
        commenceTime: new Date(),
        stadium: 'Crypto Center'
      },
      {
        title: 'Boston Red Sox @ New York Yankees',
        commenceTime: new Date(),
        stadium: 'Yankee Stadium'
      },
      {
        title: 'Los Angeles Lakers @ Brooklyn Nets',
        commenceTime: new Date(),
        stadium: 'Crypto Center'
      },
      {
        title: 'Boston Red Sox @ New York Yankees',
        commenceTime: new Date(),
        stadium: 'Yankee Stadium'
      },
      {
        title: 'Los Angeles Lakers @ Brooklyn Nets',
        commenceTime: new Date(),
        stadium: 'Crypto Center'
      },
      {
        title: 'Boston Red Sox @ New York Yankees',
        commenceTime: new Date(),
        stadium: 'Yankee Stadium'
      },
      {
        title: 'Los Angeles Lakers @ Brooklyn Nets',
        commenceTime: new Date(),
        stadium: 'Crypto Center'
      },
      {
        title: 'Boston Red Sox @ New York Yankees',
        commenceTime: new Date(),
        stadium: 'Yankee Stadium'
      },]
    }, 3000);
  }
  title = 'ibetcha-app';

  todayMatches;
  oldMatches = [];
}
