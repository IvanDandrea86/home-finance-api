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
import { PermissionOrderByWithAggregationInput } from '../../../inputs/PermissionOrderByWithAggregationInput';
import { PermissionScalarWhereWithAggregatesInput } from '../../../inputs/PermissionScalarWhereWithAggregatesInput';
import { PermissionWhereInput } from '../../../inputs/PermissionWhereInput';
import { PermissionScalarFieldEnum } from '../../../../enums/PermissionScalarFieldEnum';

@ArgsType()
export class GroupByPermissionArgs {
  @Field((_type) => PermissionWhereInput, {
    nullable: true,
  })
  where?: PermissionWhereInput | undefined;

  @Field((_type) => [PermissionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PermissionOrderByWithAggregationInput[] | undefined;

  @Field((_type) => [PermissionScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'createdAt' | 'updatedAt' | 'userId' | 'type'>;

  @Field((_type) => PermissionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PermissionScalarWhereWithAggregatesInput | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
