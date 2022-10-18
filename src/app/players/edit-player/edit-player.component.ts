import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { playersCreateDTO, playersDTO } from '../players';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private playersService: PlayersService
  ) { }

  model: playersDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playersService.getById(params.id)
      .subscribe(player => {
        this.model = player;
      }, () => this.router.navigate(['/players']));
    });
  }

  title = 'Edit Player';

  store(player: playersCreateDTO) {
    this.playersService.edit(this.model.id, player)
    .subscribe(() => {
      this.router.navigate(['/players']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
