import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ModelsModule } from './models/models.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ALLOW_ORIGIN } from './constants';
import { GraphQLConfig } from './config/graphgql.config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig),
    ModelsModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({}),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
