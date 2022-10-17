import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { slideCreationDTO } from '../slides';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-create-slide',
  templateUrl: './create-slide.component.html',
  styleUrls: ['./create-slide.component.css']
})
export class CreateSlideComponent implements OnInit {

  constructor(private slidesService: SlidesService, private router: Router) { }

  ngOnInit(): void {
  }

  title = 'Create Slide';

  errors = [];

  store(slide: slideCreationDTO) {
    this.slidesService.create(slide)
    .subscribe(() => {
      this.router.navigate(['/slides']);
    }, errors => this.errors = parseErrorsFromAPI(errors))
  }

}
