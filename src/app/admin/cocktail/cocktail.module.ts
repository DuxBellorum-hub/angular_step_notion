import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CocktailIndexComponent } from './cocktail-index/cocktail-index.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailAddComponent } from './cocktail-add/cocktail-add.component';
import { CocktailDeleteComponent } from './cocktail-delete/cocktail-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CocktailIndexComponent, CocktailEditComponent, CocktailAddComponent, CocktailDeleteComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    FormsModule
  ]
})
export class CocktailModule { }
