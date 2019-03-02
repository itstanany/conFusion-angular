import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMsg: string;
  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderservice.getLeaders()
    .subscribe((leaderParameter) => this.leaders = leaderParameter,
    errmess => this.errMsg = <any>errmess);
  }

}
