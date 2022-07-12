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
import { FindManyPermissionArgs } from './args/FindManyPermissionArgs';
import { Permission } from '../../../models/Permission';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Permission)
export class FindManyPermissionResolver {
  @Query((_returns) => [Permission], {
    nullable: false,
  })
  async permissions(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindManyPermissionArgs,
  ): Promise<Permission[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
