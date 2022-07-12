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
import { NestedEnumVerificationStatusFilter } from './NestedEnumVerificationStatusFilter';
import { NestedEnumVerificationStatusWithAggregatesFilter } from './NestedEnumVerificationStatusWithAggregatesFilter';
import { NestedIntFilter } from './NestedIntFilter';
import { VerificationStatus } from '../../enums/VerificationStatus';

@InputType('EnumVerificationStatusWithAggregatesFilter', {
  isAbstract: true,
})
export class EnumVerificationStatusWithAggregatesFilter {
  @Field((_type) => VerificationStatus, {
    nullable: true,
  })
  equals?: 'NOT_VERIFIED' | 'VERIFIED' | 'PENDING' | undefined;

  @Field((_type) => [VerificationStatus], {
    nullable: true,
  })
  in?: Array<'NOT_VERIFIED' | 'VERIFIED' | 'PENDING'> | undefined;

  @Field((_type) => [VerificationStatus], {
    nullable: true,
  })
  notIn?: Array<'NOT_VERIFIED' | 'VERIFIED' | 'PENDING'> | undefined;

  @Field((_type) => NestedEnumVerificationStatusWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumVerificationStatusWithAggregatesFilter | undefined;

  @Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @Field((_type) => NestedEnumVerificationStatusFilter, {
    nullable: true,
  })
  _min?: NestedEnumVerificationStatusFilter | undefined;

  @Field((_type) => NestedEnumVerificationStatusFilter, {
    nullable: true,
  })
  _max?: NestedEnumVerificationStatusFilter | undefined;
}
