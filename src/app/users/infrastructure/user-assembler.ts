import { User } from '../domain/model/user.entity';
import { UserResponse } from './user-response';

export class UserAssembler {
  static toEntityFromResponse(response: UserResponse): User {
    return {
      id: response.id,
      name: response.name,
      username: response.username,
      email: response.email,
      address: `${response.address.street}, ${response.address.city}`,
      phone: response.phone,
      website: response.website,
      company: response.company.name,
    };
  }

  static toEntitiesFromResponse(responses: UserResponse[]): User[] {
    return responses.map((r) => this.toEntityFromResponse(r));
  }
}
