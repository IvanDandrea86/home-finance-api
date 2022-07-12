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
import { AggregateUserArgs } from './args/AggregateUserArgs';
import { CreateManyUserArgs } from './args/CreateManyUserArgs';
import { CreateUserArgs } from './args/CreateUserArgs';
import { DeleteManyUserArgs } from './args/DeleteManyUserArgs';
import { DeleteUserArgs } from './args/DeleteUserArgs';
import { FindFirstUserArgs } from './args/FindFirstUserArgs';
import { FindManyUserArgs } from './args/FindManyUserArgs';
import { FindUniqueUserArgs } from './args/FindUniqueUserArgs';
import { GroupByUserArgs } from './args/GroupByUserArgs';
import { UpdateManyUserArgs } from './args/UpdateManyUserArgs';
import { UpdateUserArgs } from './args/UpdateUserArgs';
import { UpsertUserArgs } from './args/UpsertUserArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { User } from '../../../models/User';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateUser } from '../../outputs/AggregateUser';
import { UserGroupBy } from '../../outputs/UserGroupBy';

@Resolver((_of) => User)
export class UserCrudResolver {
  @Query((_returns) => User, {
    nullable: true,
  })
  async user(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindUniqueUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => User, {
    nullable: true,
  })
  async findFirstUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindFirstUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => [User], {
    nullable: false,
  })
  async users(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindManyUserArgs,
  ): Promise<User[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => User, {
    nullable: true,
  })
  async deleteUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => User, {
    nullable: true,
  })
  async updateUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateUserArgs,
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateManyUserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => User, {
    nullable: false,
  })
  async upsertUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpsertUserArgs,
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => AggregateUser, {
    nullable: false,
  })
  async aggregateUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: AggregateUserArgs,
  ): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @Query((_returns) => [UserGroupBy], {
    nullable: false,
  })
  async groupByUser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: GroupByUserArgs,
  ): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
