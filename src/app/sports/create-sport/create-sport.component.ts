import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/utils/validators/firstLetterUppercase';
import { sportsCreateDTO } from '../sports';

@Component({
  selector: 'app-create-sport',
  templateUrl: './create-sport.component.html',
  styleUrls: ['./create-sport.component.css']
})
export class CreateSportComponent {

  constructor(private router: Router) { }

  title = 'Create Sport';

  store(sport: sportsCreateDTO) {
    // console.log(sport);
    this.router.navigate(['/sports']);
  }

}
