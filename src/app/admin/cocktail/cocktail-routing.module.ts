import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailIndexComponent } from './cocktail-index/cocktail-index.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailAddComponent } from './cocktail-add/cocktail-add.component';
import { CocktailDeleteComponent } from './cocktail-delete/cocktail-delete.component';

const routes: Routes = [
  {path: '', component : CocktailIndexComponent},
  {path: 'edit/:id', component : CocktailEditComponent},
  {path: 'add', component : CocktailAddComponent},
  {path: 'delete/:id', component : CocktailDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
