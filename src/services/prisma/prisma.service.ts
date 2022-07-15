import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import loggingMiddleware from '../../../prisma/loggingMiddleware';
import encryptMiddleware from '../../../prisma/encryptMiddleware';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.$use(encryptMiddleware);
    this.$use(loggingMiddleware);
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
