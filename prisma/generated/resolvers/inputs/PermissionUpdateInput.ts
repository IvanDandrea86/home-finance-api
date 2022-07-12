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
import { EnumRoleFieldUpdateOperationsInput } from './EnumRoleFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from './StringFieldUpdateOperationsInput';
import { UserUpdateOneWithoutPermissionInput } from './UserUpdateOneWithoutPermissionInput';

@InputType('PermissionUpdateInput', {
  isAbstract: true,
})
export class PermissionUpdateInput {
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

  @Field((_type) => UserUpdateOneWithoutPermissionInput, {
    nullable: true,
  })
  user?: UserUpdateOneWithoutPermissionInput | undefined;

  @Field((_type) => EnumRoleFieldUpdateOperationsInput, {
    nullable: true,
  })
  type?: EnumRoleFieldUpdateOperationsInput | undefined;
}
