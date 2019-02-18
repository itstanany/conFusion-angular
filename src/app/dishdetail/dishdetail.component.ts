import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// importing the Dish class as interface
import { Dish } from '../shared/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // i don't know why ther is a plus + sign at the begging of the assignment expression
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  gotBack(): void {
    this.location.back();
  }
}
