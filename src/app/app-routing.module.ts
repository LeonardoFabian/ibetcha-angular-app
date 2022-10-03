import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsIndexComponent } from './bets/bets-index/bets-index.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatchesIndexComponent } from './matches/matches-index/matches-index.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'bets', component: BetsIndexComponent},
  {path: 'matches', component: MatchesIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
