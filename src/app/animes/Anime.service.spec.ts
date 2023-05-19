/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimeService } from './Anime.service';

describe('Service: Anime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimeService]
    });
  });

  it('should ...', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));
});
