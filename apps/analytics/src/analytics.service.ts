import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'apps/nestjs-microservices/src/create-user.event';

@Injectable()
export class AnalyticsService {
  private readonly analytics: { email: string; timestamp: Date }[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
