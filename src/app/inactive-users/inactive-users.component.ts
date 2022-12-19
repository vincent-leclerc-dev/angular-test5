import { Component, Input } from '@angular/core';

import { User } from '../user/user.model';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent{
  @Input() users: User[];

  constructor(private userService: UserService) {}

  onSetToActive(id: number) {
    this.userService.enableUser(id);
  }
}
