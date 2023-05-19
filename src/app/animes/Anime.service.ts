import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Anime } from './Anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getAnimes(): Observable<Anime[]> {
  return this.http.get<Anime[]>(this.apiUrl);
}

}
