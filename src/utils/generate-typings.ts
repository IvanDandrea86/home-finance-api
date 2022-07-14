import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { __prod__ } from '../constants';

const definitionsFactoriy = new GraphQLDefinitionsFactory();
definitionsFactoriy.generate({
  typePaths: ['../*.gql'],
  path: join(
    process.cwd(),
    'node_modules/@prisma/client/nestjs-graphql/graphql.ts',
  ),
  outputAs: 'class',
  watch: !__prod__,
});
