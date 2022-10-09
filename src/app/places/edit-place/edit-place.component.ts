import { Component, OnInit } from '@angular/core';
import { placeCreateDTO, placeDTO } from '../places';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {

  constructor() { }

  model: placeDTO = {
    name: 'Crypto.com Arena',
    photo: 'https://ca-times.brightspotcdn.com/dims4/default/2640aac/2147483647/strip/true/crop/3725x2488+0+0/resize/1200x802!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F64%2Fa1%2F3fdb57c541d087567abea78c582d%2Fcrypto.com%20Arena%20Roof%20Rendering_FINAL.jpg'
  };

  ngOnInit(): void {
  }

  title = 'Edit Place';

  store(place: placeCreateDTO) {
    console.log(place);
  }

}
