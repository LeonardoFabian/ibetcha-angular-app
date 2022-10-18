import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseErrorsFromAPI } from 'src/app/utils/helpers';
import { courtCreateDTO, courtDTO } from '../courts';
import { CourtsService } from '../courts.service';

@Component({
  selector: 'app-edit-court',
  templateUrl: './edit-court.component.html',
  styleUrls: ['./edit-court.component.css']
})
export class EditCourtComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courtsService: CourtsService
  ) { }

  model: courtDTO;
  errors: string[] = [];

  // model: courtDTO = {
  //   name: 'Crypto.com Arena',
  //   photo: 'https://mms.businesswire.com/media/20220822005316/en/1549505/5/Crypto_Refresh_Summer_2022.jpg',
  //   latitude: 34.04299531819297,
  //   longitude: -118.26714098453523
  // };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courtsService.getById(params.id)
      .subscribe(court => {
        this.model = court;
      }, () => this.router.navigate(['/courts']));
    });
  }

  title = 'Edit Court';

  store(court: courtCreateDTO) {
    this.courtsService.edit(this.model.id, court)
    .subscribe(() => {
      this.router.navigate(['/courts']);
    }, error => this.errors = parseErrorsFromAPI(error))
  }

}
