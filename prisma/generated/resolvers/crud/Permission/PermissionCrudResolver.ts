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
import { CreateManyPermissionArgs } from './args/CreateManyPermissionArgs';
import { CreatePermissionArgs } from './args/CreatePermissionArgs';
import { DeleteManyPermissionArgs } from './args/DeleteManyPermissionArgs';
import { DeletePermissionArgs } from './args/DeletePermissionArgs';
import { FindFirstPermissionArgs } from './args/FindFirstPermissionArgs';
import { FindManyPermissionArgs } from './args/FindManyPermissionArgs';
import { FindUniquePermissionArgs } from './args/FindUniquePermissionArgs';
import { GroupByPermissionArgs } from './args/GroupByPermissionArgs';
import { UpdateManyPermissionArgs } from './args/UpdateManyPermissionArgs';
import { UpdatePermissionArgs } from './args/UpdatePermissionArgs';
import { UpsertPermissionArgs } from './args/UpsertPermissionArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { Permission } from '../../../models/Permission';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregatePermission } from '../../outputs/AggregatePermission';
import { PermissionGroupBy } from '../../outputs/PermissionGroupBy';

@Resolver((_of) => Permission)
export class PermissionCrudResolver {
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

  @Query((_returns) => Permission, {
    nullable: true,
  })
  async findFirstPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindFirstPermissionArgs,
  ): Promise<Permission | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => Permission, {
    nullable: false,
  })
  async createPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreatePermissionArgs,
  ): Promise<Permission> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateManyPermissionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => Permission, {
    nullable: true,
  })
  async deletePermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeletePermissionArgs,
  ): Promise<Permission | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteManyPermissionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateManyPermissionArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => Permission, {
    nullable: false,
  })
  async upsertPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpsertPermissionArgs,
  ): Promise<Permission> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).permission.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query((_returns) => [PermissionGroupBy], {
    nullable: false,
  })
  async groupByPermission(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: GroupByPermissionArgs,
  ): Promise<PermissionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).permission.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
