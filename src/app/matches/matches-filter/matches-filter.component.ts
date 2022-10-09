import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches-filter',
  templateUrl: './matches-filter.component.html',
  styleUrls: ['./matches-filter.component.css']
})
export class MatchesFilterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) {

    }

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
    {id: 6, name: 'Mundial de Fútbol'},
  ];

  matches = [
    {homeTeam: 'Los Angeles Lakers', awayTeam: 'Brooklyn Nets', commenceTime: '10-07-2022', todayMatches: true, upcomingMatches: false, countries: [1], sports: [2], leagues: [2]},
    {homeTeam: 'Minnesota Timberwolves', awayTeam: 'Golden State Warriors', commenceTime: '11-05-2022', todayMatches: true, upcomingMatches: false, countries: [1], sports: [2], leagues: [2]},
    {homeTeam: 'Boston Red Sox', awayTeam: 'New York Yankees', commenceTime: '05-01-2022', todayMatches: false, upcomingMatches: true, countries: [1], sports: [1], leagues: [1]},
    {homeTeam: 'Brazil', awayTeam: 'Spain', commenceTime: '12-24-2022', todayMatches: true, upcomingMatches: false, countries: [2,3], sports: [3], leagues: [6]},
    {homeTeam: 'Tigres del Licey', awayTeam: 'Aguilas del Cibao', commenceTime: '01-07-2022', todayMatches: false, upcomingMatches: true, countries: [4], sports: [1], leagues: [5]},
  ];

  todayMatches = this.matches;

  defaultForm = {
    title: '',
    countryId: 0,
    sportId: 0,
    leagueId: 0,
    teamId: 0,
    stadiumId: 0,
    startDate: '',
    endDate: '',
    todayMatches: false,
    upcomingMatches: false,
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group(this.defaultForm);

    this.getUrlQueryParameters();
    this.search(this.form.value);

    this.form.valueChanges
      .subscribe(values => {
        this.matches = this.todayMatches;
        this.search(values);
        this.searchByQueryString();
      })
  }

  title = "Search Match";

  private getUrlQueryParameters() {
    this.activatedRoute.queryParams.subscribe((params) => {
      var object : any = {};

      if (params.title) {
        object.title = params.title;
      }

      if (params.countryId) {
        object.countryId = Number(params.countryId);
      }

      if (params.sportId) {
        object.sportId = Number(params.sportId);
      }

      if (params.leagueId) {
        object.leagueId = Number(params.leagueId);
      }

      if (params.todayMatches) {
        object.todayMatches = params.todayMatches;
      }

      if (params.upcomingMatches) {
        object.upcomingMatches = params.upcomingMatches;
      }

      this.form.patchValue(object);
    });
  }

  private searchByQueryString() {
    var queryStrings = [];

    var formValue = this.form.value;

    if (formValue.title) {
      queryStrings.push(`title=${formValue.title}`);
    }

    if (formValue.countryId != '0') {
      queryStrings.push(`countryId=${formValue.countryId}`);
    }

    if (formValue.sportId != '0') {
      queryStrings.push(`sportId=${formValue.sportId}`);
    }

    if (formValue.leagueId != '0') {
      queryStrings.push(`leagueId=${formValue.leagueId}`);
    }

    if (formValue.todayMatches) {
      queryStrings.push(`todayMatches=${formValue.todayMatches}`);
    }

    if (formValue.upcomingMatches) {
      queryStrings.push(`upcomingMatches=${formValue.upcomingMatches}`);
    }

    this.location.replaceState('matches/search', queryStrings.join('&'));
  }

  search(values: any) {
    if (values.title) {
      this.matches = this.matches.filter(matches => matches.homeTeam.indexOf(values.title) !== -1);
    }

    if (values.countryId !== 0) {
      this.matches = this.matches.filter(matches => matches.countries.indexOf(values.countryId) !== -1);
    }

    if (values.sportId !== 0) {
      this.matches = this.matches.filter(matches => matches.sports.indexOf(values.sportId) !== -1);
    }

    if (values.leagueId !== 0) {
      this.matches = this.matches.filter(matches => matches.leagues.indexOf(values.leagueId) !== -1);
    }

    if (values.todayMatches) {
      this.matches = this.matches.filter(matches => matches.todayMatches);
    }

    if (values.upcomingMatches) {
      this.matches = this.matches.filter(matches => matches.upcomingMatches);
    }
  }

  clear() {
    this.form.patchValue(this.defaultForm);
  }

}
