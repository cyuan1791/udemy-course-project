import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myNav = '';

  onSwitchNav(data: { myNav: string }) {
    this.myNav = data.myNav;
    console.log(data.myNav);
  }
}
