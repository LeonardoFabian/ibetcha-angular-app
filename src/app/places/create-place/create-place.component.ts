import { Component, OnInit } from '@angular/core';
import { placeCreateDTO } from '../places';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Create Place';

  store(place: placeCreateDTO) {
    console.log(place);
  }

}
