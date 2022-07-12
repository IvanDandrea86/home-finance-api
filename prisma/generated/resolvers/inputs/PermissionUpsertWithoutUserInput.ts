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
import { PermissionUpdateWithoutUserInput } from './PermissionUpdateWithoutUserInput';

@InputType('PermissionUpsertWithoutUserInput', {
  isAbstract: true,
})
export class PermissionUpsertWithoutUserInput {
  @Field((_type) => PermissionUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: PermissionUpdateWithoutUserInput;

  @Field((_type) => PermissionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: PermissionCreateWithoutUserInput;
}
