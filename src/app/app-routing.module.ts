import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsIndexComponent } from './bets/bets-index/bets-index.component';
import { MakeBetComponent } from './bets/make-bet/make-bet.component';
import { TakeBetComponent } from './bets/take-bet/take-bet.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatchesIndexComponent } from './matches/matches-index/matches-index.component';
import { SportsIndexComponent } from './sports/sports-index/sports-index.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sports', component: SportsIndexComponent},
  {path: 'bets', component: BetsIndexComponent},
  {path: 'bets/make', component: MakeBetComponent},
  {path: 'bets/take/:id', component: TakeBetComponent},
  {path: 'matches', component: MatchesIndexComponent},

  {path: 'teams/edit/:id', component: EditTeamComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
