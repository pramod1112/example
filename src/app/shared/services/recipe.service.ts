import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../model/recipe.model";

// @Injectable({
//     providedIn : 'root'
// })
export class RecipeService{
    private recipeList = [
    new Recipe('Pohe', 'Poha is an Indian breakfast and snack prepared in the cuisines of Indian states of Maharashtra, Odisha, West Bengal, Madhya Pradesh, Telangana, Karnataka, Gujarat, Goa and Rajasthan.','https://thumbs.dreamstime.com/b/chana-poha-chickpea-pohe-protein-rich-breakfast-recipe-india-power-kabuli-choley-popular-maharashtrian-indian-190243755.jpg'),
    new Recipe('Upma','Upma is typically made by first lightly dry roasting semolina (called rava or sooji in India). The semolina is then taken off the fire and kept aside while spices, lentils, onion, ginger, etc are sautéed in oil or ghee. The semolina is then added back to the pan and mixed thoroughly.','https://thumbs.dreamstime.com/b/upma-made-samolina-rava-upma-most-famous-south-indian-breakfast-item-which-beautifully-arranged-plate-banana-216111370.jpg'),
    new Recipe('Idali','Idli or idly is a type of savoury rice cake, originating from the South India,popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body.',"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg")
  ];
  recipeEmitter = new EventEmitter();
  getRecipies(){
    return this.recipeList;
  }
}