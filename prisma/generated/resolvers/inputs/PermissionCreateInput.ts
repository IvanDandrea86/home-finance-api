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
import { UserCreateNestedOneWithoutPermissionInput } from './UserCreateNestedOneWithoutPermissionInput';
import { Role } from '../../enums/Role';

@InputType('PermissionCreateInput', {
  isAbstract: true,
})
export class PermissionCreateInput {
  @Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @Field((_type) => UserCreateNestedOneWithoutPermissionInput, {
    nullable: true,
  })
  user?: UserCreateNestedOneWithoutPermissionInput | undefined;

  @Field((_type) => Role, {
    nullable: false,
  })
  type!: 'ADMIN' | 'USER';
}
