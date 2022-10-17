import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsFilterComponent } from './bets/bets-filter/bets-filter.component';
import { BetsIndexComponent } from './bets/bets-index/bets-index.component';
import { MakeBetComponent } from './bets/make-bet/make-bet.component';
import { TakeBetComponent } from './bets/take-bet/take-bet.component';
import { CategoriesIndexComponent } from './categories/categories-index/categories-index.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { CourtsIndexComponent } from './courts/courts-index/courts-index.component';
import { CreateCourtComponent } from './courts/create-court/create-court.component';
import { EditCourtComponent } from './courts/edit-court/edit-court.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateLeagueComponent } from './leagues/create-league/create-league.component';
import { EditLeagueComponent } from './leagues/edit-league/edit-league.component';
import { LeaguesIndexComponent } from './leagues/leagues-index/leagues-index.component';
import { MatchesFilterComponent } from './matches/matches-filter/matches-filter.component';
import { MatchesIndexComponent } from './matches/matches-index/matches-index.component';
import { CreatePlayerComponent } from './players/create-player/create-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { PlayersIndexComponent } from './players/players-index/players-index.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostsIndexComponent } from './posts/posts-index/posts-index.component';
import { CreateSlideComponent } from './slides/create-slide/create-slide.component';
import { EditSlideComponent } from './slides/edit-slide/edit-slide.component';
import { SlidesIndexComponent } from './slides/slides-index/slides-index.component';
import { CreateSportComponent } from './sports/create-sport/create-sport.component';
import { EditSportComponent } from './sports/edit-sport/edit-sport.component';
import { SportsIndexComponent } from './sports/sports-index/sports-index.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'categories', component: CategoriesIndexComponent},
  {path: 'categories/create', component: CreateCategoryComponent},
  {path: 'categories/edit/:id', component: EditCategoryComponent},
  {path: 'sports', component: SportsIndexComponent},
  {path: 'sports/create', component: CreateSportComponent},
  {path: 'sports/edit/:id', component: EditSportComponent},
  {path: 'leagues', component: LeaguesIndexComponent},
  {path: 'leagues/create', component: CreateLeagueComponent},
  {path: 'leagues/edit/:id', component: EditLeagueComponent},
  {path: 'courts', component: CourtsIndexComponent},
  {path: 'courts/create', component: CreateCourtComponent},
  {path: 'courts/edit/:id', component: EditCourtComponent},

  {path: 'bets', component: BetsIndexComponent},
  {path: 'bets/make', component: MakeBetComponent},
  {path: 'bets/take/:id', component: TakeBetComponent},
  {path: 'bets/search', component: BetsFilterComponent},
  {path: 'matches', component: MatchesIndexComponent},
  {path: 'matches/search', component: MatchesFilterComponent},

  {path: 'teams/create', component: CreateTeamComponent},
  {path: 'teams/edit/:id', component: EditTeamComponent},
  {path: 'players', component: PlayersIndexComponent},
  {path: 'players/create', component: CreatePlayerComponent},
  {path: 'players/edit/:id', component: EditPlayerComponent},

  {path: 'posts', component: PostsIndexComponent},
  {path: 'posts/create', component: CreatePostComponent},
  {path: 'posts/edit/:id', component: EditPostComponent},
  {path: 'slides', component: SlidesIndexComponent},
  {path: 'slides/create', component: CreateSlideComponent},
  {path: 'slides/edit/:id', component: EditSlideComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
