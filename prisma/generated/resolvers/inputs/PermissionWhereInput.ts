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
import { EnumRoleFilter } from './EnumRoleFilter';
import { StringFilter } from './StringFilter';
import { UserRelationFilter } from './UserRelationFilter';

@InputType('PermissionWhereInput', {
  isAbstract: true,
})
export class PermissionWhereInput {
  @Field((_type) => [PermissionWhereInput], {
    nullable: true,
  })
  AND?: PermissionWhereInput[] | undefined;

  @Field((_type) => [PermissionWhereInput], {
    nullable: true,
  })
  OR?: PermissionWhereInput[] | undefined;

  @Field((_type) => [PermissionWhereInput], {
    nullable: true,
  })
  NOT?: PermissionWhereInput[] | undefined;

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

  @Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @Field((_type) => EnumRoleFilter, {
    nullable: true,
  })
  type?: EnumRoleFilter | undefined;
}
