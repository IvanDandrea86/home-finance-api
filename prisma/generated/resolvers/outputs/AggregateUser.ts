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
import { UserCountAggregate } from './UserCountAggregate';
import { UserMaxAggregate } from './UserMaxAggregate';
import { UserMinAggregate } from './UserMinAggregate';

@ObjectType('AggregateUser', {
  isAbstract: true,
})
export class AggregateUser {
  @Field((_type) => UserCountAggregate, {
    nullable: true,
  })
  _count!: UserCountAggregate | null;

  @Field((_type) => UserMinAggregate, {
    nullable: true,
  })
  _min!: UserMinAggregate | null;

  @Field((_type) => UserMaxAggregate, {
    nullable: true,
  })
  _max!: UserMaxAggregate | null;
}
