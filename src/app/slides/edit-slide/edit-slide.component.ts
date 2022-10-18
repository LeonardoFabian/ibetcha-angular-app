import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { slideCreationDTO, slideDTO } from '../slides';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.css']
})
export class EditSlideComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private slidesService: SlidesService

  ) { }

  model: slideDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.slidesService.getById(params.id)
      .subscribe(slide => {
        this.model = slide;
      }, () => this.router.navigate(['/slides']));
    });
  }

  title = 'Edit Slide';

  store(slide: slideCreationDTO) {
    this.slidesService.edit(this.model.id, slide)
    .subscribe(() => {
      this.router.navigate(['/slides']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
