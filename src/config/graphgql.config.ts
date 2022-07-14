import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

export const GraphQLConfig: ApolloDriverConfig = {
  installSubscriptionHandlers: true,
  autoSchemaFile: './schema.gql',
  cors: { origin: 'http://localhost:3000', credentials: true },
  debug: true,
  playground: true,
  introspection: false,
  // plugins: [ApolloServerPluginLandingPageLocalDefault()],
  driver: ApolloDriver,
  context: ({ req, res }) => ({ req, res }),
};
