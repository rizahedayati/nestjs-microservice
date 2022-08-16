// import { NestFactory } from '@nestjs/core';
// import { PostsModule } from './posts.module';

// async function bootstrap() {
//   const app = await NestFactory.create(PostsModule);
//   await app.listen(3000);
// }
// bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { RmqService } from '@app/common';
// import { PostsModule } from './posts.module';
// import { RmqOptions } from '@nestjs/microservices';
// import { ValidationPipe } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// async function bootstrap() {
//   const app = await NestFactory.create(PostsModule);
//   const rmqService = app.get<RmqService>(RmqService);
//   app.connectMicroservice<RmqOptions>(rmqService.getOptions('POSTS', true));
//   app.useGlobalPipes(new ValidationPipe());
//   const configService = app.get(ConfigService);
//   await app.startAllMicroservices();
//   await app.listen(configService.get('PORT'));
// }
// bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  app.useGlobalPipes(new ValidationPipe());
  // const configService = app.get(ConfigService);
  await app.listen(9001);
}
bootstrap();
