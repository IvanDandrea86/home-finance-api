import {
  Args,
  ArgsType,
  Context,
  Field,
  Float,
  ID,
  Info,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
  Root,
  registerEnumType,
} from '@nestjs/graphql';
import * as graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { CreateUserArgs } from './args/CreateUserArgs';
import { User } from '../../../models/User';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => User)
export class CreateUserResolver {
  @Mutation((_returns) => User, {
    nullable: false,
  })
  async createUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateUserArgs,
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
