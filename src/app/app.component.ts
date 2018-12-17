import { Component, NgModule } from '@angular/core';
import * as ok from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modulo02';
  nome = 25;
  public list = ok.map([1, 2, 3], (n) => `# ${n}`);
}
