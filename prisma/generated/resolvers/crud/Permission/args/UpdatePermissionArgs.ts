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
import { PermissionUpdateInput } from '../../../inputs/PermissionUpdateInput';
import { PermissionWhereUniqueInput } from '../../../inputs/PermissionWhereUniqueInput';

@ArgsType()
export class UpdatePermissionArgs {
  @Field((_type) => PermissionUpdateInput, {
    nullable: false,
  })
  data!: PermissionUpdateInput;

  @Field((_type) => PermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: PermissionWhereUniqueInput;
}