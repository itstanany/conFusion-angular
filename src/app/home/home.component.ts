import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
// importing leader service
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;
  promotion: Promotion;
  leader: Leader;
  constructor(private dishservice: DishService,
   private promotionservice: PromotionService,
   private leaderservice: LeaderService,
   @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe((dishParamter) => this.dish = dishParamter,
    errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
    .subscribe((promotionParameter) => this.promotion = promotionParameter,
    errmess => this.promotionErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader()
    .subscribe((leaderParameter) => this.leader = leaderParameter,
    errmess => this.leaderErrMess = <any>errmess);
  }

}
