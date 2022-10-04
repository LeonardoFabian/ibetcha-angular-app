import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-matches-filter',
  templateUrl: './matches-filter.component.html',
  styleUrls: ['./matches-filter.component.css']
})
export class MatchesFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'Brazil'},
    {id: 3, name: 'Spain'},
    {id: 4, name: 'Dominican Republic'},
  ];

  sports = [
    {id: 1, name: 'Baseball'},
    {id: 2, name: 'Basketball'},
    {id: 3, name: 'Soccer'},
    {id: 4, name: 'Tennis'},
  ];

  leagues = [
    {id: 1, name: 'MLB'},
    {id: 2, name: 'NBA'},
    {id: 3, name: 'NCAA'},
    {id: 4, name: 'NFL'},
    {id: 5, name: 'LIDOM'},
  ];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      countryId: 0,
      sportId: 0,
      leagueId: 0,
      teamId: 0,
      stadiumId: 0
    })
  }

  title = "Search Match";

}
