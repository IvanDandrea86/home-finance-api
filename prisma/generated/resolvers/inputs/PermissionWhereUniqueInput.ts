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

@InputType('PermissionWhereUniqueInput', {
  isAbstract: true,
})
export class PermissionWhereUniqueInput {
  @Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  userId?: string | undefined;
}
