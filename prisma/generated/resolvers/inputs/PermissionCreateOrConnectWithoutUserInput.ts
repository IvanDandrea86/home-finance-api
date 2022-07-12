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
import { PermissionCreateWithoutUserInput } from './PermissionCreateWithoutUserInput';
import { PermissionWhereUniqueInput } from './PermissionWhereUniqueInput';

@InputType('PermissionCreateOrConnectWithoutUserInput', {
  isAbstract: true,
})
export class PermissionCreateOrConnectWithoutUserInput {
  @Field((_type) => PermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: PermissionWhereUniqueInput;

  @Field((_type) => PermissionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: PermissionCreateWithoutUserInput;
}
