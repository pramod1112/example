import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recData') rec: Recipe | any;
  // @Output('itemClickHandler') itemClickHandler : EventEmitter<Recipe>= new EventEmitter();
  constructor(private recServ : RecipeService) { }
  ngOnInit(): void {
  }
  recipeClick():void {
    // console.log('Click event triggered')
    // this.itemClickHandler.emit(this.rec)
    this.recServ.recipeEmitter.emit(this.rec)
  }
}
