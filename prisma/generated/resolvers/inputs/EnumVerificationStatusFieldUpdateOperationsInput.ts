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

@InputType('EnumVerificationStatusFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class EnumVerificationStatusFieldUpdateOperationsInput {
  @Field((_type) => VerificationStatus, {
    nullable: true,
  })
  set?: 'NOT_VERIFIED' | 'VERIFIED' | 'PENDING' | undefined;
}
