import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/model/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [
    RecipeService
  ]
})
export class RecipeComponent implements OnInit {

  currentSeletedRecipe : Recipe | any;
  constructor( private recServ : RecipeService) {
    this.recServ.recipeEmitter.subscribe((receivedData : any)=>{
      console.log('this is from subscribe =>>', receivedData)
      this.currentSeletedRecipe = receivedData;
    })
   }

  ngOnInit(): void {
  }

  // catchedListEvent(eve : any){
  //   console.log('event Catched by parent main', eve)
  //   this.currentSeletedRecipe = eve;
  // }
}
