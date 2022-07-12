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
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutPermissionInput } from './UserCreateOrConnectWithoutPermissionInput';
import { UserCreateWithoutPermissionInput } from './UserCreateWithoutPermissionInput';
import { UserUpdateWithoutPermissionInput } from './UserUpdateWithoutPermissionInput';
import { UserUpsertWithoutPermissionInput } from './UserUpsertWithoutPermissionInput';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

@InputType('UserUpdateOneWithoutPermissionInput', {
  isAbstract: true,
})
export class UserUpdateOneWithoutPermissionInput {
  @Field((_type) => UserCreateWithoutPermissionInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPermissionInput | undefined;

  @Field((_type) => UserCreateOrConnectWithoutPermissionInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutPermissionInput | undefined;

  @Field((_type) => UserUpsertWithoutPermissionInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutPermissionInput | undefined;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field((_type) => UserUpdateWithoutPermissionInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutPermissionInput | undefined;
}
