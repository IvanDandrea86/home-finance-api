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
import { PermissionCountAggregate } from './PermissionCountAggregate';
import { PermissionMaxAggregate } from './PermissionMaxAggregate';
import { PermissionMinAggregate } from './PermissionMinAggregate';
import { Role } from '../../enums/Role';

@ObjectType('PermissionGroupBy', {
  isAbstract: true,
})
export class PermissionGroupBy {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @Field((_type) => Role, {
    nullable: false,
  })
  type!: 'ADMIN' | 'USER';

  @Field((_type) => PermissionCountAggregate, {
    nullable: true,
  })
  _count!: PermissionCountAggregate | null;

  @Field((_type) => PermissionMinAggregate, {
    nullable: true,
  })
  _min!: PermissionMinAggregate | null;

  @Field((_type) => PermissionMaxAggregate, {
    nullable: true,
  })
  _max!: PermissionMaxAggregate | null;
}
