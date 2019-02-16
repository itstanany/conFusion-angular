/**
 * this is the root component
 */

import { Component } from '@angular/core';
// the decorator of an component class
@Component({
  selector: 'app-root',
  // the template that the component metadata assosciates the component with data
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
