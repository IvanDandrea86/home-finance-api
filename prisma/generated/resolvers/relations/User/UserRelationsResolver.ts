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
import { Permission } from '../../../models/Permission';
import { User } from '../../../models/User';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => User)
export class UserRelationsResolver {
  @ResolveField((_type) => Permission, {
    nullable: true,
  })
  async permission(
    @Root() user: User,
    @Context() ctx: any,
  ): Promise<Permission | null> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .permission({});
  }
}
