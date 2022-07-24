import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ModelsModule } from './models/models.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLConfig } from './config/graphgql.config';
import path from 'path';
import { __Directive } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig),
    ModelsModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
      ],
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
