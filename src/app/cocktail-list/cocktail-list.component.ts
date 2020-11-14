import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(public cocktailService: CocktailService) { }

  ngOnInit(): Cocktail[] {
    this.cocktails = this.cocktailService.getCocktails();
    console.log(this.cocktails);
    return this.cocktails;
  }
}
