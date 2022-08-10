import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'apps/nestjs-microservices/src/create-user.event';

@Injectable()
export class CommunicationService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user
  }
}
