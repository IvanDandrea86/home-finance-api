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
import { PermissionWhereInput } from '../../../inputs/PermissionWhereInput';

@ArgsType()
export class DeleteManyPermissionArgs {
  @Field((_type) => PermissionWhereInput, {
    nullable: true,
  })
  where?: PermissionWhereInput | undefined;
}
