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
import { DateTimeNullableWithAggregatesFilter } from './DateTimeNullableWithAggregatesFilter';
import { DateTimeWithAggregatesFilter } from './DateTimeWithAggregatesFilter';
import { EnumVerificationStatusWithAggregatesFilter } from './EnumVerificationStatusWithAggregatesFilter';
import { StringNullableWithAggregatesFilter } from './StringNullableWithAggregatesFilter';
import { StringWithAggregatesFilter } from './StringWithAggregatesFilter';

@InputType('UserScalarWhereWithAggregatesInput', {
  isAbstract: true,
})
export class UserScalarWhereWithAggregatesInput {
  @Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @Field((_type) => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

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
  firstName?: StringWithAggregatesFilter | undefined;

  @Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringWithAggregatesFilter | undefined;

  @Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  password?: StringNullableWithAggregatesFilter | undefined;

  @Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  validationToken?: StringWithAggregatesFilter | undefined;

  @Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  lastLogin?: DateTimeNullableWithAggregatesFilter | undefined;

  @Field((_type) => EnumVerificationStatusWithAggregatesFilter, {
    nullable: true,
  })
  verificationStatus?: EnumVerificationStatusWithAggregatesFilter | undefined;
}
