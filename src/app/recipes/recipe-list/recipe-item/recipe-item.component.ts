import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {name: 'name', description: 'desc', 'imagePath': ''};
  @Output() selecteRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }
  selectRecipe(recipe: Recipe) {
    console.log(recipe.name);
    this.selecteRecipe.emit(recipe);
  }

}
