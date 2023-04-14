import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredBrand') ingB: ElementRef | any;
  @ViewChild('ingredName') ingN: ElementRef | any;
  @ViewChild('ingredQuantity') ingQ: ElementRef | any;
  // @Output('sendNewIngred') sendNewIngred= new EventEmitter();

  constructor(private shopServ : ShoppingService) {
  
   }

  ngOnInit(): void {
  }

  // addNewIngredient(ingB : any, ingN : any, ingQ : any){
  //  let myNewIngredObj = new Ingredient(ingB.value, ingN.value, ingQ.value)
  //  console.log(myNewIngredObj)

  addNewIngredient() {
    let myIngredObj = new Ingredient(this.ingB.nativeElement.value,this.ingN.nativeElement.value,this.ingQ.nativeElement.value)
    // console.log(myIngredObj)
    // this.sendNewIngred.emit(myIngredObj)
    this.shopServ.addNewIngredient(myIngredObj);
    this.ingB.nativeElement.value =  this.ingN.nativeElement.value = this.ingQ.nativeElement.value = '';
  }
}
