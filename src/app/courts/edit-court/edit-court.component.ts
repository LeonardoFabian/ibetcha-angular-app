import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courtCreateDTO, courtDTO } from '../courts';

@Component({
  selector: 'app-edit-court',
  templateUrl: './edit-court.component.html',
  styleUrls: ['./edit-court.component.css']
})
export class EditCourtComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: courtDTO = {
    name: 'Crypto.com Arena',
    photo: 'https://mms.businesswire.com/media/20220822005316/en/1549505/5/Crypto_Refresh_Summer_2022.jpg',
    latitude: 34.04299531819297,
    longitude: -118.26714098453523
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
    })
  }

  title = 'Edit Court';

  store(court: courtCreateDTO) {
    console.log(court);
  }

}
