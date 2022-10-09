import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { placeCreateDTO, placeDTO } from '../places';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: placeDTO = {
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

  title = 'Edit Place';

  store(place: placeCreateDTO) {
    console.log(place);
  }

}
