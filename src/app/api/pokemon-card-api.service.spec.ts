import { TestBed } from '@angular/core/testing';

import { PokemonCardApiService } from './pokemon-card-api.service';

describe('PokemonCardApiService', () => {
  let service: PokemonCardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
