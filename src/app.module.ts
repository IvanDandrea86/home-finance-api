import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ModelsModule } from './models/models.module';
import { PrismaService } from './services/prisma/prisma.service';
import { PrismaModule } from './services/prisma/prisma.module';

const prisma = new PrismaClient({
  log: ['query'],
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      installSubscriptionHandlers: true,
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
      driver: ApolloDriver,
      context: ({ req }) => ({ req, prisma }),
    }),
    ModelsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
