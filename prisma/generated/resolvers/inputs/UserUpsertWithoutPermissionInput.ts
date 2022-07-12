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
import { UserUpdateWithoutPermissionInput } from './UserUpdateWithoutPermissionInput';

@InputType('UserUpsertWithoutPermissionInput', {
  isAbstract: true,
})
export class UserUpsertWithoutPermissionInput {
  @Field((_type) => UserUpdateWithoutPermissionInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutPermissionInput;

  @Field((_type) => UserCreateWithoutPermissionInput, {
    nullable: false,
  })
  create!: UserCreateWithoutPermissionInput;
}
