import { Component, OnInit } from '@angular/core';

import { Metric } from './counter/metric.model';
import { User } from './user/user.model';

import { CounterService } from './counter/counter.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{

  users: User[] = []

  metrics: Metric[] = [];

  constructor(private userService: UserService, private counterService: CounterService){}

  ngOnInit() {
    this.users = this.userService.users;
    this.metrics = this.counterService.metrics;
  }

}
