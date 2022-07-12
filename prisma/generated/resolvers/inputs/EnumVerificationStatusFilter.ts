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
import { VerificationStatus } from '../../enums/VerificationStatus';

@InputType('EnumVerificationStatusFilter', {
  isAbstract: true,
})
export class EnumVerificationStatusFilter {
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

  @Field((_type) => NestedEnumVerificationStatusFilter, {
    nullable: true,
  })
  not?: NestedEnumVerificationStatusFilter | undefined;
}
