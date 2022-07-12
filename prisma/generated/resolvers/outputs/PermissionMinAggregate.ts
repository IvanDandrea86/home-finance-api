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
import { Role } from '../../enums/Role';

@ObjectType('PermissionMinAggregate', {
  isAbstract: true,
})
export class PermissionMinAggregate {
  @Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @Field((_type) => Role, {
    nullable: true,
  })
  type!: 'ADMIN' | 'USER' | null;
}
