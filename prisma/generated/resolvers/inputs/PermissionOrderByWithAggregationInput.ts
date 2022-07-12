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
import { PermissionCountOrderByAggregateInput } from './PermissionCountOrderByAggregateInput';
import { PermissionMaxOrderByAggregateInput } from './PermissionMaxOrderByAggregateInput';
import { PermissionMinOrderByAggregateInput } from './PermissionMinOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@InputType('PermissionOrderByWithAggregationInput', {
  isAbstract: true,
})
export class PermissionOrderByWithAggregationInput {
  @Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  type?: 'asc' | 'desc' | undefined;

  @Field((_type) => PermissionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PermissionCountOrderByAggregateInput | undefined;

  @Field((_type) => PermissionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PermissionMaxOrderByAggregateInput | undefined;

  @Field((_type) => PermissionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PermissionMinOrderByAggregateInput | undefined;
}
