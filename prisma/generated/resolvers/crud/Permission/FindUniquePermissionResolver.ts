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
import { FindUniquePermissionArgs } from './args/FindUniquePermissionArgs';
import { Permission } from '../../../models/Permission';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Permission)
export class FindUniquePermissionResolver {
  @Query((_returns) => Permission, {
    nullable: true,
  })
  async permission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindUniquePermissionArgs,
  ): Promise<Permission | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
