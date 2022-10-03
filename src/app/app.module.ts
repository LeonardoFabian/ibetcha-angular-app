import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesListComponent } from './matches/matches-list/matches-list.component';
import { ListComponent } from './utils/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BetsIndexComponent } from './bets/bets-index/bets-index.component';
import { SportsListComponent } from './sports/sports-list/sports-list.component';
import { MatchesIndexComponent } from './matches/matches-index/matches-index.component';
import { MakeBetComponent } from './bets/make-bet/make-bet.component';
import { BetsListComponent } from './bets/bets-list/bets-list.component';
import { TakeBetComponent } from './bets/take-bet/take-bet.component';
import { SportsIndexComponent } from './sports/sports-index/sports-index.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesListComponent,
    ListComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    BetsIndexComponent,
    SportsListComponent,
    MatchesIndexComponent,
    MakeBetComponent,
    BetsListComponent,
    TakeBetComponent,
    SportsIndexComponent,
    TeamsListComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
