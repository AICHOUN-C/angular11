import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

cocktail1 =  new Cocktail("Margarita", 12, "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg");
cocktail2 =  new Cocktail("Blue Margarita", 14, "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg");
cocktail3 =  new Cocktail("Tommy's Margarita", 11, "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg");

cocktails: Cocktail[] = [
  this.cocktail1,
  this.cocktail2,
  this.cocktail3
];

  constructor() {}

  public getCocktails() {
    return this.cocktails;
  }
}
