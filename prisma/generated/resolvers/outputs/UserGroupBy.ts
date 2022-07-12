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
import { VerificationStatus } from '../../enums/VerificationStatus';

@ObjectType('UserGroupBy', {
  isAbstract: true,
})
export class UserGroupBy {
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
  firstName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  lastName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  password!: string | null;

  @Field((_type) => String, {
    nullable: false,
  })
  validationToken!: string;

  @Field((_type) => Date, {
    nullable: true,
  })
  lastLogin!: Date | null;

  @Field((_type) => VerificationStatus, {
    nullable: false,
  })
  verificationStatus!: 'NOT_VERIFIED' | 'VERIFIED' | 'PENDING';

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
