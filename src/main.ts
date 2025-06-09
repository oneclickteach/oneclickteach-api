import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const documentOptions = new DocumentBuilder()
  .setTitle('One Click Teach API')
  .setDescription('One Click Teach API')
  .setVersion('1.0')
  .addServer(
    `${configService.getOrThrow<string>('SWAGGER_SERVER_HOST')}`,
    'Server',
  )
  .addTag('Health')
  .addTag('Auth')
  .addTag('Settings')
  .build();

  const document = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));


  await app.listen(configService.get<number>('HTTP_PORT', 3000));
}
bootstrap();
