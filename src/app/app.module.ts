import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesListComponent } from './matches/matches-list/matches-list.component';
import { ListComponent } from './utils/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import "leaflet/dist/images/marker-shadow.png";

import { MaterialModule } from './material/material.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BetsFormComponent } from './bets/bets-form/bets-form.component';
import { BetsFilterComponent } from './bets/bets-filter/bets-filter.component';
import { MatchesFilterComponent } from './matches/matches-filter/matches-filter.component';
import { TeamsFormComponent } from './teams/teams-form/teams-form.component';
import { LeaguesFormComponent } from './leagues/leagues-form/leagues-form.component';
import { PlayersFormComponent } from './players/players-form/players-form.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { SportsFormComponent } from './sports/sports-form/sports-form.component';
import { CreateSportComponent } from './sports/create-sport/create-sport.component';
import { EditSportComponent } from './sports/edit-sport/edit-sport.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { CreatePlayerComponent } from './players/create-player/create-player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { PlayersIndexComponent } from './players/players-index/players-index.component';
import { CategoriesIndexComponent } from './categories/categories-index/categories-index.component';
import { InputImgComponent } from './utils/input-img/input-img.component';
import { InputMarkdownComponent } from './utils/input-markdown/input-markdown.component';
import { PostsFormComponent } from './posts/posts-form/posts-form.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CreateLeagueComponent } from './leagues/create-league/create-league.component';
import { EditLeagueComponent } from './leagues/edit-league/edit-league.component';
import { LeaguesIndexComponent } from './leagues/leagues-index/leagues-index.component';
import { PlacesIndexComponent } from './places/places-index/places-index.component';
import { PlacesFormComponent } from './places/places-form/places-form.component';
import { CreatePlaceComponent } from './places/create-place/create-place.component';
import { EditPlaceComponent } from './places/edit-place/edit-place.component';
import { PostsIndexComponent } from './posts/posts-index/posts-index.component';
import { MapComponent } from './utils/map/map.component';

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
    EditTeamComponent,
    BetsFormComponent,
    BetsFilterComponent,
    MatchesFilterComponent,
    TeamsFormComponent,
    LeaguesFormComponent,
    PlayersFormComponent,
    CategoriesFormComponent,
    SportsFormComponent,
    CreateSportComponent,
    EditSportComponent,
    CreateTeamComponent,
    CreatePlayerComponent,
    EditPlayerComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    PlayersIndexComponent,
    CategoriesIndexComponent,
    InputImgComponent,
    InputMarkdownComponent,
    PostsFormComponent,
    CreatePostComponent,
    EditPostComponent,
    CreateLeagueComponent,
    EditLeagueComponent,
    LeaguesIndexComponent,
    PlacesIndexComponent,
    PlacesFormComponent,
    CreatePlaceComponent,
    EditPlaceComponent,
    PostsIndexComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    ReactiveFormsModule,
    NgbModule,
    LeafletModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
