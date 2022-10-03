import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  maxRatingArray = [];
  review = false;
  previousRating;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number): void {
    this.selectedRating = index + 1;
  }

  handleMouseLeave() {
    if (this.previousRating !== 0) {
      this.selectedRating = this.previousRating;
    } else {
      this.selectedRating = 0;
    }
  }

  rate(index: number): void {
    this.selectedRating = index + 1;
    this.review = true;
    this.previousRating = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }

}
