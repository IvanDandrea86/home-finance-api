import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ALLOW_ORIGIN } from 'src/constants';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export const GraphQLConfig: ApolloDriverConfig = {
  installSubscriptionHandlers: true,
  autoSchemaFile: './schema.gql',
  cors: { origin: ALLOW_ORIGIN, credentials: true },
  debug: true,
  playground: true,
  introspection: true,
  // plugins: [ApolloServerPluginLandingPageLocalDefault()],
  driver: ApolloDriver,
  context: ({ req, res }) => ({ req, res }),
};
