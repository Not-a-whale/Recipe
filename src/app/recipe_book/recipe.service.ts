import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../Shopping_list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'Test', 
        'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
        [new Ingredient('Meat', 1), 
        new Ingredient ('French Fries', 20)]),
        new Recipe('Another Test Recipe', 
        'Test', 
        'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
        [new Ingredient ('Buns', 2),
        new Ingredient('Meat', 1)]) 
      ];
      constructor (private slService: ShoppingListService) {

      }
    getRecipe(id: number) {
        return this.recipes[id]
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
        console.log(ingredients);
    }
}