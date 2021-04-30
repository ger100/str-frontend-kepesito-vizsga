import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://ttps://tr360-frontend-exam-april.azurewebsites.net/ger100/movies:3000/movies';

  constructor(undefined) { }

  getMovieList():any {
    return null;
  }

  deleteMovie(id):any {
    return null;
  }
}
