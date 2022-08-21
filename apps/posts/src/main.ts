

import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { configureSwagger } from '@app/common';


async function bootstrap() {
    const logger = new Logger();
  const app = await NestFactory.create(PostsModule);
  const configService = app.get(ConfigService);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  configureSwagger(app,"posts");

  await app.listen(configService.get('PORT'));
  logger.log(
    `🚀 Post service running on port ${configService.get('PORT')}`,
  );
}
bootstrap();

