import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeTop: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  // onReceipeComp(recipe: Recipe) {
  //   this.recipeTop = recipe;
  //   console.log(recipe.name);
  // }
}
