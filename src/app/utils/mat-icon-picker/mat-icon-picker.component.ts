import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-icon-picker',
  templateUrl: './mat-icon-picker.component.html',
  styleUrls: ['./mat-icon-picker.component.css']
})
export class MatIconPickerComponent implements OnInit {

  @Input()
  icon: string = 'ligatures';

  constructor() { }

  ngOnInit(): void {
  }

}
