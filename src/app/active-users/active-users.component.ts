import { Component, Input } from '@angular/core';

import { User } from '../user/user.model';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent {
  @Input() users: User[];

  constructor(private userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.disableUser(id);
  }
}
