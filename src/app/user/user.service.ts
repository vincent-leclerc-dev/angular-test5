import { Injectable } from '@angular/core';

import { MetricKey } from '../counter/metricKey';
import { UserStatus } from './userStatus';

import { User } from './user.model';

import { CounterService } from '../counter/counter.service';


@Injectable()
export class UserService {

    users: User[] = [
      {
        id: 1,
        firstname: 'Max',
        status: UserStatus.ACTIVE
      },
      {
        id: 2,
        firstname: 'Anna',
        status: UserStatus.ACTIVE
      },
      {
        id: 3,
        firstname: 'Chris',
        status: UserStatus.INACTIVE
      },
      {
        id: 4,
        firstname: 'Manu',
        status: UserStatus.INACTIVE
      }
    ];

    constructor(private counterService: CounterService) {}

    enableUser(id: number) {
      const index = this.users.findIndex(user => user.id === id);
      this.users[index] = {...this.users[index], status: UserStatus.ACTIVE};
      this.counterService.increment(MetricKey.ENABLE_USER);
    }

    disableUser(id: number) {
      const index = this.users.findIndex(user => user.id === id);
      this.users[index] = {...this.users[index], status: UserStatus.INACTIVE};
      this.counterService.increment(MetricKey.DISABLE_USER);
    }

}
