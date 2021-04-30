import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }


  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASE_URL);
  }

  getMovies(): void {
    return this.http.get<Movie>(`${this.BASE_URL}/${id}`);
  }

  deleteMovie(id: number): any {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }





}
