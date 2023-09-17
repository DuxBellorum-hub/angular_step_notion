import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-cocktail-add',
  templateUrl: './cocktail-add.component.html',
  styleUrls: ['./cocktail-add.component.css']
})
export class CocktailAddComponent implements OnInit {


  cocktail: ICocktail = {
    user_id: 0,
    nom: '',
    description: '',
    recette: '',
  }

  constructor(
    private cocktailService: CocktailService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    //Pour finir il faut installer jwt decode pour avoir les infos de l'utilisateur connécter et ainsi envoyer l'id en même temps qu'on add le cocktail.
    let u = this.tokenService.getPayload()
    this.cocktail.user_id = u.id

    this.cocktailService.addCocktail(this.cocktail).subscribe(
      data => console.log(data.message)
    )
  }
}
