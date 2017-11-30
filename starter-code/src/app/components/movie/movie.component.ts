import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any = {};

  constructor( private activateRoute: ActivatedRoute,
               private _moviesService: MoviesService
  ) {

    this.activateRoute.params.subscribe( params => {
      console.log (params['id']);
      this.movie = this._moviesService.getMovie(params['id'])
    })
  }

  ngOnInit() {
  }

}
