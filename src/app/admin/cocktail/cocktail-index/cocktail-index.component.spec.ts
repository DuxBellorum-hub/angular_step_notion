import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailIndexComponent } from './cocktail-index.component';

describe('CocktailIndexComponent', () => {
  let component: CocktailIndexComponent;
  let fixture: ComponentFixture<CocktailIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
