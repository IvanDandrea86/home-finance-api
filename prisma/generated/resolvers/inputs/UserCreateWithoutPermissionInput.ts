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

@InputType('UserCreateWithoutPermissionInput', {
  isAbstract: true,
})
export class UserCreateWithoutPermissionInput {
  @Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

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
  password?: string | undefined;

  @Field((_type) => String, {
    nullable: false,
  })
  validationToken!: string;

  @Field((_type) => Date, {
    nullable: true,
  })
  lastLogin?: Date | undefined;

  @Field((_type) => VerificationStatus, {
    nullable: true,
  })
  verificationStatus?: 'NOT_VERIFIED' | 'VERIFIED' | 'PENDING' | undefined;
}
