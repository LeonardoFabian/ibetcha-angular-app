import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordinates } from './coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input()
  modelCoordinates: Coordinates[] = [];

  @Output()
  coordinates: EventEmitter<Coordinates> = new EventEmitter<Coordinates>();

  ngOnInit(): void {
    this.layers = this.modelCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 16,
    center: latLng(34.04299531819297, -118.26714098453523)
  };

  layers: Marker<any>[] = [];

  handleClick(event: LeafletMouseEvent) {
    // 34.0348451,-118.2781016
    console.log(event);
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    // console.log("lat: " + latitude + " long: " + longitude);

    this.layers = [];
    this.layers.push(marker([latitude, longitude], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41], // click relative anchor position
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.coordinates.emit({latitude: latitude, longitude: longitude});
  }

}
