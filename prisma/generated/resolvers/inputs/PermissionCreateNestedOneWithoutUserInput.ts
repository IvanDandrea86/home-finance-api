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
import { PermissionCreateOrConnectWithoutUserInput } from './PermissionCreateOrConnectWithoutUserInput';
import { PermissionCreateWithoutUserInput } from './PermissionCreateWithoutUserInput';
import { PermissionWhereUniqueInput } from './PermissionWhereUniqueInput';

@InputType('PermissionCreateNestedOneWithoutUserInput', {
  isAbstract: true,
})
export class PermissionCreateNestedOneWithoutUserInput {
  @Field((_type) => PermissionCreateWithoutUserInput, {
    nullable: true,
  })
  create?: PermissionCreateWithoutUserInput | undefined;

  @Field((_type) => PermissionCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | undefined;

  @Field((_type) => PermissionWhereUniqueInput, {
    nullable: true,
  })
  connect?: PermissionWhereUniqueInput | undefined;
}
