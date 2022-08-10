import { Injectable } from '@nestjs/common';

import { CreateUserRequest } from './dto/create-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: CreateUserRequest[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
  }
}
