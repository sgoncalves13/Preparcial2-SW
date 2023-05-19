import { Component, OnInit } from '@angular/core';
import { Anime } from '../Anime';
import { AnimeService } from '../Anime.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  selectedAnime!: Anime;
  selected: Boolean = false;

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  animes: Array<Anime> = [];

  public promedio: number = 0;

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.promedio = this.actualizarPromedio();
    });
  }

  actualizarPromedio(): number{
    let suma: number = 0;
    this.animes.forEach((anime) => suma+= parseFloat(anime.Rating));
    let promedio: number = suma/this.animes.length
    return promedio;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
