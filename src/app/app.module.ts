import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipe_book/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe_book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Shopping_list/shopping-list.component';
import { ShoppingListEditComponent } from './Shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipe_book/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Shopping_list/shoppingList.service';
import { RecipeStartComponent } from './recipe_book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe_book/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
