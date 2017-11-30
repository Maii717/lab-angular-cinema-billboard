import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:id', component: MovieComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
