import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe_book/recipe.component';
import { ShoppingListComponent } from './Shopping_list/shopping-list.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe_book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe_book/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeComponent, children: [
    {path: '', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent }
  ] },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
