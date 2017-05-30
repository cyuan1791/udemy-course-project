import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.currentNav.emit({
      myNav: 'Recipes'
    });
  }

  @Output() currentNav = new EventEmitter<{ myNav: string }>();

  // onSwitchNav() {
  //   this.currentNav.emit({
  //     myNav: 'Recipes'
  //   });
  // }
  onSwitchRecipes() {
    this.currentNav.emit({
      myNav: 'Recipes'
    });
  }

  onSwitchShoppingList() {
    this.currentNav.emit({
      myNav: 'Shopping List'
    });
  }
}
