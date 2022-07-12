import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { crudResolvers, resolvers } from '../prisma/generated';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const prisma = new PrismaClient({
  log: ['query'],
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
      driver: ApolloDriver,
      context: ({ req }) => ({ req, prisma }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...(crudResolvers as unknown as Provider<any>[]),
    ...(resolvers as unknown as Provider<any>[]),
  ],
})
export class AppModule {}
