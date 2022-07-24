import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as session from 'express-session';
import { ALLOW_ORIGIN, __prod__ } from './constants';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { sessionConfig } from './config/session.config';
import * as cookieParser from 'cookie-parser';
// somewhere in your initialization file
// somewhere in your initialization file
export const whitelist = [ALLOW_ORIGIN, 'https://studio.apollographql.com'];
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });
  app.set('trust proxy', 1);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
