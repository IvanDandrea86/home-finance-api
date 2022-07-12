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
import { NestedIntNullableFilter } from './NestedIntNullableFilter';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';
import { NestedStringNullableWithAggregatesFilter } from './NestedStringNullableWithAggregatesFilter';
import { QueryMode } from '../../enums/QueryMode';

@InputType('StringNullableWithAggregatesFilter', {
  isAbstract: true,
})
export class StringNullableWithAggregatesFilter {
  @Field((_type) => String, {
    nullable: true,
  })
  equals?: string | undefined;

  @Field((_type) => [String], {
    nullable: true,
  })
  in?: string[] | undefined;

  @Field((_type) => [String], {
    nullable: true,
  })
  notIn?: string[] | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  lt?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  lte?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  gt?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  gte?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  contains?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  startsWith?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  endsWith?: string | undefined;

  @Field((_type) => QueryMode, {
    nullable: true,
  })
  mode?: 'default' | 'insensitive' | undefined;

  @Field((_type) => NestedStringNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @Field((_type) => NestedIntNullableFilter, {
    nullable: true,
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field((_type) => NestedStringNullableFilter, {
    nullable: true,
  })
  _min?: NestedStringNullableFilter | undefined;

  @Field((_type) => NestedStringNullableFilter, {
    nullable: true,
  })
  _max?: NestedStringNullableFilter | undefined;
}
