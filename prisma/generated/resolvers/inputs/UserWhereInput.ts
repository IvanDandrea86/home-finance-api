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
import { DateTimeFilter } from './DateTimeFilter';
import { DateTimeNullableFilter } from './DateTimeNullableFilter';
import { EnumVerificationStatusFilter } from './EnumVerificationStatusFilter';
import { PermissionRelationFilter } from './PermissionRelationFilter';
import { StringFilter } from './StringFilter';
import { StringNullableFilter } from './StringNullableFilter';

@InputType('UserWhereInput', {
  isAbstract: true,
})
export class UserWhereInput {
  @Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  firstName?: StringFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  lastName?: StringFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  validationToken?: StringFilter | undefined;

  @Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  lastLogin?: DateTimeNullableFilter | undefined;

  @Field((_type) => EnumVerificationStatusFilter, {
    nullable: true,
  })
  verificationStatus?: EnumVerificationStatusFilter | undefined;

  @Field((_type) => PermissionRelationFilter, {
    nullable: true,
  })
  permission?: PermissionRelationFilter | undefined;
}
