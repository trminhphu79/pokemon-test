import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSectionComponent } from './pokemon-section.component';

describe('PokemonSectionComponent', () => {
  let component: PokemonSectionComponent;
  let fixture: ComponentFixture<PokemonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
