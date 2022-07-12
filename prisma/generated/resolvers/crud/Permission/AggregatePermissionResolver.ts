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
import { AggregatePermissionArgs } from './args/AggregatePermissionArgs';
import { Permission } from '../../../models/Permission';
import { AggregatePermission } from '../../outputs/AggregatePermission';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Permission)
export class AggregatePermissionResolver {
  @Query((_returns) => AggregatePermission, {
    nullable: false,
  })
  async aggregatePermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: AggregatePermissionArgs,
  ): Promise<AggregatePermission> {
    return getPrismaFromContext(ctx).permission.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
