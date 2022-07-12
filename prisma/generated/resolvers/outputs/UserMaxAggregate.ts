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
import { VerificationStatus } from '../../enums/VerificationStatus';

@ObjectType('UserMaxAggregate', {
  isAbstract: true,
})
export class UserMaxAggregate {
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
  firstName!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  lastName!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  email!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  password!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  validationToken!: string | null;

  @Field((_type) => Date, {
    nullable: true,
  })
  lastLogin!: Date | null;

  @Field((_type) => VerificationStatus, {
    nullable: true,
  })
  verificationStatus!: 'NOT_VERIFIED' | 'VERIFIED' | 'PENDING' | null;
}
