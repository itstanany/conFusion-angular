import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
// the data source
import { DISHES } from '../shared/dishes';

import { from } from 'rxjs';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe((tanany) => this.dishes = tanany);
  }
}
