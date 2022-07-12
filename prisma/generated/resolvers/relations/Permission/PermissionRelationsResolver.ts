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

@Resolver((_of) => Permission)
export class PermissionRelationsResolver {
  @ResolveField((_type) => User, {
    nullable: true,
  })
  async user(
    @Root() permission: Permission,
    @Context() ctx: any,
  ): Promise<User | null> {
    return getPrismaFromContext(ctx)
      .permission.findUnique({
        where: {
          id: permission.id,
        },
      })
      .user({});
  }
}
