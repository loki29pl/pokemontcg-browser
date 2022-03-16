import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontcgDetailComponent } from './pokemontcg-detail.component';

describe('PokemontcgDetailComponent', () => {
  let component: PokemontcgDetailComponent;
  let fixture: ComponentFixture<PokemontcgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemontcgDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontcgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
