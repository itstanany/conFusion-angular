import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
// the data source 
import { DISHES } from '../shared/dishes';

import { from } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }

  // the method that will handle the click event to show the card detail
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
