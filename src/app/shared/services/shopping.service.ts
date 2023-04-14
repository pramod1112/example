import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";

export class ShoppingService{
    ingredientList = [
        new Ingredient('Tata', 'Salt','2'),
        new Ingredient('Gemini', 'Oil','3'),
        new Ingredient('Colgate', 'ToothPaste','4')
      ]
    ingredientListChangeEvent = new EventEmitter();

    getIngredients(){
        return this.ingredientList.slice();
    }
    addNewIngredient(ingred : any) {
        this.ingredientList.push(ingred)
        this.ingredientListChangeEvent.emit(this.ingredientList.slice())
    }
}