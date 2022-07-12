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
import { Role } from '../../enums/Role';

@InputType('EnumRoleFilter', {
  isAbstract: true,
})
export class EnumRoleFilter {
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

  @Field((_type) => NestedEnumRoleFilter, {
    nullable: true,
  })
  not?: NestedEnumRoleFilter | undefined;
}
