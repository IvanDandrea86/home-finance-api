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

@ObjectType('UserCountAggregate', {
  isAbstract: true,
})
export class UserCountAggregate {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  createdAt!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  updatedAt!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  firstName!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  lastName!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  email!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  password!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  validationToken!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  lastLogin!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  verificationStatus!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  _all!: number;
}
