import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AnalyticsModule } from './analytics.module';

// Hybrid Application
// HTTP 요청을 수신함과 동시에 Microservice를 사용하는 Application
// https://docs.nestjs.com/faq/hybrid-application
async function bootstrap() {
  const app = await NestFactory.create(AnalyticsModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 3001 },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
