import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/model/user.entity';
import { UserApi } from '../infrastructure/user-api';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private api = inject(UserApi);

  loadUsers(): Observable<User[]> {
    return this.api.getUsers();
  }
}
