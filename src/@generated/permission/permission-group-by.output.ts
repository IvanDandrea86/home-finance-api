import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => Role, { nullable: false })
  type!: keyof typeof Role;

  @Field(() => PermissionCountAggregate, { nullable: true })
  _count?: PermissionCountAggregate;

  @Field(() => PermissionMinAggregate, { nullable: true })
  _min?: PermissionMinAggregate;

  @Field(() => PermissionMaxAggregate, { nullable: true })
  _max?: PermissionMaxAggregate;
}
