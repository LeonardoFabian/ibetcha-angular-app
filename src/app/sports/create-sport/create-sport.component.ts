import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { sportCreateDTO } from '../sports';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-create-sport',
  templateUrl: './create-sport.component.html',
  styleUrls: ['./create-sport.component.css']
})
export class CreateSportComponent {

  errors: string[] = [];

  constructor(private router: Router, private sportsService: SportsService) { }

  title = 'Create Sport';

  store(sport: sportCreateDTO) {
    this.sportsService.create(sport).subscribe(() => {
      this.router.navigate(['/sports']);
    }, (error) => this.errors = parseErrorsFromAPI(error));
  }

}
