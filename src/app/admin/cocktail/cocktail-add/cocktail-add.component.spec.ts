import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailAddComponent } from './cocktail-add.component';

describe('CocktailAddComponent', () => {
  let component: CocktailAddComponent;
  let fixture: ComponentFixture<CocktailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
