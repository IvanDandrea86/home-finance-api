import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ALLOW_ORIGIN, __prod__ } from 'src/constants';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { whitelist } from 'src/main';

export const GraphQLConfig: ApolloDriverConfig = {
  installSubscriptionHandlers: true,
  autoSchemaFile: './schema.gql',
  cors: {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  },
  debug: !__prod__,
  cache: 'bounded',
  playground: false,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  driver: ApolloDriver,
  context: ({ req, res }) => ({ req, res }),
};
