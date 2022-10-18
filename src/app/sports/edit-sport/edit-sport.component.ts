import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { sportCreateDTO, sportDTO } from '../sports';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-edit-sport',
  templateUrl: './edit-sport.component.html',
  styleUrls: ['./edit-sport.component.css']
})
export class EditSportComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sportsService: SportsService
  ) { }

  model: sportDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sportsService.getById(params.id)
        .subscribe(sport => {
          this.model = sport;
        }, () => this.router.navigate(['/sports']));
    });
  }

  title = 'Edit Sport';

  store(sport: sportCreateDTO) {
    this.sportsService.edit(this.model.id, sport)
    .subscribe(() => {
      this.router.navigate(['/sports']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
