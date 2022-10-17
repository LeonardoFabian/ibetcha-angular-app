import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { playersCreateDTO } from '../players';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
  }

  title = 'Create Player';

  errors = [];

  store(player: playersCreateDTO) {
    this.playersService.create(player)
    .subscribe(() => {
      this.router.navigate(['/players']);
    }, errors => this.errors = parseErrorsFromAPI(errors))
  }

}
