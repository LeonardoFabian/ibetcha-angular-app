import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { courtCreateDTO } from '../courts';
import { CourtsService } from '../courts.service';

@Component({
  selector: 'app-create-court',
  templateUrl: './create-court.component.html',
  styleUrls: ['./create-court.component.css']
})
export class CreateCourtComponent implements OnInit {

  constructor(private courtsService: CourtsService, private router: Router) { }

  ngOnInit(): void {
  }

  title = 'Create Court';

  errors = [];

  store(court: courtCreateDTO) {
    this.courtsService.create(court)
    .subscribe(() => {
      this.router.navigate(['/courts']);
    }, errors => this.errors = parseErrorsFromAPI(errors))
  }

}
