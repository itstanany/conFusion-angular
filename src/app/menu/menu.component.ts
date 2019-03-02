import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
// the data source
// for http week 4 import { DISHES } from '../shared/dishes';

import { from } from 'rxjs';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  // constructor(private dishService: DishService,
    // @Inject('baseURL') private BaseURL) { }
    constructor(private dishService: DishService,
      @Inject('BaseURL') private BaseURL) { }
  ngOnInit() {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes = dishes,
    errmes => this.errMess = <any>errmes);
  }
}
