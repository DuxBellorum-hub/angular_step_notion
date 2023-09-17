import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-cocktail-index',
  templateUrl: './cocktail-index.component.html',
  styleUrls: ['./cocktail-index.component.css']
})
export class CocktailIndexComponent implements OnInit {

  cocktailList: ICocktail[] = []

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(
      data => {
        console.log(data)
        this.cocktailList = data.data
      }
    )
  }

  trash(id:number | undefined){
    console.log(id)
    this.cocktailService.trashCocktail(id).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
    })
  }

  untrash(id:number | undefined){
    this.cocktailService.untrashCocktail(id).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
    })
  }

}