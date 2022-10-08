import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sportsCreateDTO } from '../sports';

@Component({
  selector: 'app-edit-sport',
  templateUrl: './edit-sport.component.html',
  styleUrls: ['./edit-sport.component.css']
})
export class EditSportComponent implements OnInit {

  constructor(private router: Router) { }

  model: sportsCreateDTO = {name: 'Basketball'};

  ngOnInit(): void {
  }

  title = 'Edit Sport';

  store(sport: sportsCreateDTO) {
    this.router.navigate(['/sports']);
  }

}
