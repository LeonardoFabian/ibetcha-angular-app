import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsFilterComponent } from './bets/bets-filter/bets-filter.component';
import { BetsIndexComponent } from './bets/bets-index/bets-index.component';
import { MakeBetComponent } from './bets/make-bet/make-bet.component';
import { TakeBetComponent } from './bets/take-bet/take-bet.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatchesFilterComponent } from './matches/matches-filter/matches-filter.component';
import { MatchesIndexComponent } from './matches/matches-index/matches-index.component';
import { CreatePlayerComponent } from './players/create-player/create-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { CreateSportComponent } from './sports/create-sport/create-sport.component';
import { EditSportComponent } from './sports/edit-sport/edit-sport.component';
import { SportsIndexComponent } from './sports/sports-index/sports-index.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sports', component: SportsIndexComponent},
  {path: 'sports/create', component: CreateSportComponent},
  {path: 'sports/edit/:id', component: EditSportComponent},
  {path: 'bets', component: BetsIndexComponent},
  {path: 'bets/make', component: MakeBetComponent},
  {path: 'bets/take/:id', component: TakeBetComponent},
  {path: 'bets/search', component: BetsFilterComponent},
  {path: 'matches', component: MatchesIndexComponent},
  {path: 'matches/search', component: MatchesFilterComponent},

  {path: 'teams/create', component: CreateTeamComponent},
  {path: 'teams/edit/:id', component: EditTeamComponent},
  {path: 'players/create', component: CreatePlayerComponent},
  {path: 'players/edit/:id', component: EditPlayerComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
