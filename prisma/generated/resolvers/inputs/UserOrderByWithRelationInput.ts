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
import { PermissionOrderByWithRelationInput } from './PermissionOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@InputType('UserOrderByWithRelationInput', {
  isAbstract: true,
})
export class UserOrderByWithRelationInput {
  @Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  firstName?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  lastName?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  email?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  password?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  validationToken?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  lastLogin?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  verificationStatus?: 'asc' | 'desc' | undefined;

  @Field((_type) => PermissionOrderByWithRelationInput, {
    nullable: true,
  })
  permission?: PermissionOrderByWithRelationInput | undefined;
}
