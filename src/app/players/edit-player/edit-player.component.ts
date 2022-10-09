import { Component, OnInit } from '@angular/core';
import { playersCreateDTO, playersDTO } from '../players';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor() { }

  model: playersDTO = {
    name: 'LeBron James',
    birthday: new Date(),
    height: 2,
    weight: 2,
    sportId: 2,
    teamId: 1,
    number: 6,
    photo: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png'
  };

  ngOnInit(): void {
  }

  title = 'Edit Player';

  store(player: playersCreateDTO) {
    console.log(player);
  }

}
