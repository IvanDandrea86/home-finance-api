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
import { UserCreateWithoutPermissionInput } from './UserCreateWithoutPermissionInput';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';

@InputType('UserCreateOrConnectWithoutPermissionInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutPermissionInput {
  @Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @Field((_type) => UserCreateWithoutPermissionInput, {
    nullable: false,
  })
  create!: UserCreateWithoutPermissionInput;
}
