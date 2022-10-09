import { Component, OnInit } from '@angular/core';
import { playersCreateDTO } from '../players';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Create Player';

  store(player: playersCreateDTO) {
    console.log(player);
  }

}
