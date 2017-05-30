import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Rescipe', 'This is simple a test', 'http://archive.webcmsd.com/images/sf_gate1440x350.jpg'),
    new Recipe('A Test Rescipe B', 'This is simple a test', 'http://archive.webcmsd.com/images/sf_gate1440x350.jpg')
  ];

  @Output() recipeComp = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeComp.emit(recipe);
  }
}
