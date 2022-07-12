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
import { DateTimeWithAggregatesFilter } from './DateTimeWithAggregatesFilter';
import { EnumRoleWithAggregatesFilter } from './EnumRoleWithAggregatesFilter';
import { StringWithAggregatesFilter } from './StringWithAggregatesFilter';

@InputType('PermissionScalarWhereWithAggregatesInput', {
  isAbstract: true,
})
export class PermissionScalarWhereWithAggregatesInput {
  @Field((_type) => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field((_type) => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field((_type) => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @Field((_type) => EnumRoleWithAggregatesFilter, {
    nullable: true,
  })
  type?: EnumRoleWithAggregatesFilter | undefined;
}
