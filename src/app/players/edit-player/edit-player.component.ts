import { Component, OnInit } from '@angular/core';
import { playersCreateDTO } from '../players';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor() { }

  model: playersCreateDTO = {
    name: 'LeBron James',
    birthday: new Date(),
    sportId: 2,
    teamId: 1,
    number: 6
  };

  ngOnInit(): void {
  }

  title = 'Edit Player';

  store(player: playersCreateDTO) {
    console.log(player);
  }

}
