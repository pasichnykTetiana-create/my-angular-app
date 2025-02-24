import {Component} from '@angular/core';
import {MaterialCardComponent} from './components/material-card/material-card.component';


@Component({
  selector: 'app-root',
  imports: [MaterialCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
}
