import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipeList : any[] = [];
  // @Output('listEventHandler') listEventHandler : EventEmitter<Recipe> = new EventEmitter(); 
  constructor(private recServ : RecipeService) {
    this.recipeList = this.recServ.getRecipies();
   }
  // catchedItemEvent(eve : Recipe): void{
  //   // console.log('event catched by parent list',eve)
  //   this.listEventHandler.emit(eve)
  // }
  

}
