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
import { PermissionUpdateWithoutUserInput } from './PermissionUpdateWithoutUserInput';
import { PermissionUpsertWithoutUserInput } from './PermissionUpsertWithoutUserInput';
import { PermissionWhereUniqueInput } from './PermissionWhereUniqueInput';

@InputType('PermissionUpdateOneWithoutUserInput', {
  isAbstract: true,
})
export class PermissionUpdateOneWithoutUserInput {
  @Field((_type) => PermissionCreateWithoutUserInput, {
    nullable: true,
  })
  create?: PermissionCreateWithoutUserInput | undefined;

  @Field((_type) => PermissionCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | undefined;

  @Field((_type) => PermissionUpsertWithoutUserInput, {
    nullable: true,
  })
  upsert?: PermissionUpsertWithoutUserInput | undefined;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @Field((_type) => PermissionWhereUniqueInput, {
    nullable: true,
  })
  connect?: PermissionWhereUniqueInput | undefined;

  @Field((_type) => PermissionUpdateWithoutUserInput, {
    nullable: true,
  })
  update?: PermissionUpdateWithoutUserInput | undefined;
}
