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
import { Role } from '../../enums/Role';

@InputType('EnumRoleFieldUpdateOperationsInput', {
  isAbstract: true,
})
export class EnumRoleFieldUpdateOperationsInput {
  @Field((_type) => Role, {
    nullable: true,
  })
  set?: 'ADMIN' | 'USER' | undefined;
}
