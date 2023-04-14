import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientList : any[] =[];

  constructor( private shopServ : ShoppingService) {
    this.ingredientList = this.shopServ.getIngredients();
    this.shopServ.ingredientListChangeEvent.subscribe((updatedIngredientList :  any)=>{
      console.log('Something has changed')
      this.ingredientList = updatedIngredientList;
      // this.ingredientList = this.shopServ.getIngredients(); 
    })
  }

  ngOnInit(): void {
  }

  // catchNewIngred(eve : any){
  //   console.log(eve)
  //   this.ingredientList.push(eve)
  // }
}
