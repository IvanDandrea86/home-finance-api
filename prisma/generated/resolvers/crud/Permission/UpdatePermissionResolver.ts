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
import { UpdatePermissionArgs } from './args/UpdatePermissionArgs';
import { Permission } from '../../../models/Permission';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Permission)
export class UpdatePermissionResolver {
  @Mutation((_returns) => Permission, {
    nullable: true,
  })
  async updatePermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdatePermissionArgs,
  ): Promise<Permission | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
