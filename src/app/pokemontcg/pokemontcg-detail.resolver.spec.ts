import { TestBed } from '@angular/core/testing';

import { PokemontcgDetailResolver } from './pokemontcg-detail.resolver';

describe('PokemontcgDetailResolver', () => {
  let resolver: PokemontcgDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemontcgDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
