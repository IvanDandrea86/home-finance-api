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
import { PermissionCreateManyInput } from '../../../inputs/PermissionCreateManyInput';

@ArgsType()
export class CreateManyPermissionArgs {
  @Field((_type) => [PermissionCreateManyInput], {
    nullable: false,
  })
  data!: PermissionCreateManyInput[];

  @Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
