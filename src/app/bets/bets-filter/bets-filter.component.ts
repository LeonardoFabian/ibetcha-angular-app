import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bets-filter',
  templateUrl: './bets-filter.component.html',
  styleUrls: ['./bets-filter.component.css']
})
export class BetsFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  categories = [
    {id: 1, name: 'Open'},
    {id: 2, name: 'Closed'}
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      categoryId: 0
    })
  }

  title = "Search Bet";

}
