import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../Anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit() {
  }

}
