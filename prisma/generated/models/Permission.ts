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
import { DecimalJSScalar } from '../scalars';
import { User } from './User';
import { Role } from '../enums/Role';

@ObjectType('Permission', {
  isAbstract: true,
})
export class Permission {
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

  user?: User | null;

  @Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @Field((_type) => Role, {
    nullable: false,
  })
  type!: 'ADMIN' | 'USER';
}
