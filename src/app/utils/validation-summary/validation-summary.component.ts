import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.css']
})
export class ValidationSummaryComponent implements OnInit {

  @Input()
  errors: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
