import { Injectable } from '@angular/core';
import sampleMovies  from '../sample-movies';






@Injectable ()
export class MoviesService {

  private movies:any[]= sampleMovies





  constructor() {
    console.log("Service done")
  }
  getMovies():Movie[]{
    return this.movies;
  }

  getMovie (idx: number){
    return this.movies[idx];
  }
}


export interface Movie{
  id: number,

  room: string,
  title: string,
  poster: string,
  synopsis: string,
  genres: { type: String, default: null },
  year: number,
  director: string,
  actors:{ type: String, default: null }
}
