import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../domain/model/user.entity';
import { UserAssembler } from './user-assembler';
import { UserResponse } from './user-response';

@Injectable({ providedIn: 'root' })
export class UserApi {
  private http = inject(HttpClient);
  private url = `${environment.userApiBaseUrl}${environment.userApiEndpoint}`;

  getUsers(): Observable<User[]> {
    return this.http
      .get<UserResponse[]>(this.url)
      .pipe(map((responses) => UserAssembler.toEntitiesFromResponse(responses)));
  }
}
