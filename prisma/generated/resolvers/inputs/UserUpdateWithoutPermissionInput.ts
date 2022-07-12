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
import { DateTimeFieldUpdateOperationsInput } from './DateTimeFieldUpdateOperationsInput';
import { EnumVerificationStatusFieldUpdateOperationsInput } from './EnumVerificationStatusFieldUpdateOperationsInput';
import { NullableDateTimeFieldUpdateOperationsInput } from './NullableDateTimeFieldUpdateOperationsInput';
import { NullableStringFieldUpdateOperationsInput } from './NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from './StringFieldUpdateOperationsInput';

@InputType('UserUpdateWithoutPermissionInput', {
  isAbstract: true,
})
export class UserUpdateWithoutPermissionInput {
  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  validationToken?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastLogin?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @Field((_type) => EnumVerificationStatusFieldUpdateOperationsInput, {
    nullable: true,
  })
  verificationStatus?:
    | EnumVerificationStatusFieldUpdateOperationsInput
    | undefined;
}
