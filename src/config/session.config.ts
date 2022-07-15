import { SessionOptions } from 'express-session';
import {
  SESSIONSECRET,
  __prod__,
  ONEDAY,
  COOKIENAME,
  REDIS_URL,
} from '../constants';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import Redis from 'ioredis';
export const redis = new Redis(REDIS_URL);
const RedisStore = connectRedis(session);

export const sessionConfig: SessionOptions = {
  store: new RedisStore({
    client: redis,
    disableTouch: true,
  }),
  secret: SESSIONSECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: __prod__, // cookie only works in https
    maxAge: ONEDAY,
    httpOnly: true,
    sameSite: 'lax', //production 'lax',
  },
  name: COOKIENAME,
};
