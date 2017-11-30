import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:Movie[]=[];

  constructor( private _moviesService: MoviesService) { }

  ngOnInit() {

   this.movies = this._moviesService.getMovies();

   console.log(this.movies)


  }

}
