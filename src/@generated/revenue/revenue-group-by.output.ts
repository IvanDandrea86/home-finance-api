import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RevenueCountAggregate } from './revenue-count-aggregate.output';
import { RevenueMinAggregate } from './revenue-min-aggregate.output';
import { RevenueMaxAggregate } from './revenue-max-aggregate.output';

@ObjectType()
export class RevenueGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  familyId!: string;

  @Field(() => RevenueCountAggregate, { nullable: true })
  _count?: RevenueCountAggregate;

  @Field(() => RevenueMinAggregate, { nullable: true })
  _min?: RevenueMinAggregate;

  @Field(() => RevenueMaxAggregate, { nullable: true })
  _max?: RevenueMaxAggregate;
}
