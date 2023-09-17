import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDeleteComponent } from './cocktail-delete.component';

describe('CocktailDeleteComponent', () => {
  let component: CocktailDeleteComponent;
  let fixture: ComponentFixture<CocktailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
