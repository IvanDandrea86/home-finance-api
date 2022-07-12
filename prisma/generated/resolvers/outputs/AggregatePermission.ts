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

@ObjectType('AggregatePermission', {
  isAbstract: true,
})
export class AggregatePermission {
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
