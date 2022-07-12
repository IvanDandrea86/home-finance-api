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
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

@InputType('UserCreateNestedOneWithoutPermissionInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutPermissionInput {
  @Field((_type) => UserCreateWithoutPermissionInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPermissionInput | undefined;

  @Field((_type) => UserCreateOrConnectWithoutPermissionInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutPermissionInput | undefined;

  @Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
