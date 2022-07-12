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
import { NestedEnumRoleFilter } from './NestedEnumRoleFilter';
import { NestedEnumRoleWithAggregatesFilter } from './NestedEnumRoleWithAggregatesFilter';
import { NestedIntFilter } from './NestedIntFilter';
import { Role } from '../../enums/Role';

@InputType('EnumRoleWithAggregatesFilter', {
  isAbstract: true,
})
export class EnumRoleWithAggregatesFilter {
  @Field((_type) => Role, {
    nullable: true,
  })
  equals?: 'ADMIN' | 'USER' | undefined;

  @Field((_type) => [Role], {
    nullable: true,
  })
  in?: Array<'ADMIN' | 'USER'> | undefined;

  @Field((_type) => [Role], {
    nullable: true,
  })
  notIn?: Array<'ADMIN' | 'USER'> | undefined;

  @Field((_type) => NestedEnumRoleWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @Field((_type) => NestedEnumRoleFilter, {
    nullable: true,
  })
  _min?: NestedEnumRoleFilter | undefined;

  @Field((_type) => NestedEnumRoleFilter, {
    nullable: true,
  })
  _max?: NestedEnumRoleFilter | undefined;
}
