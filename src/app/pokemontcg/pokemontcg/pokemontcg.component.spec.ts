import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontcgComponent } from './pokemontcg.component';

describe('PokemontcgComponent', () => {
  let component: PokemontcgComponent;
  let fixture: ComponentFixture<PokemontcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemontcgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
