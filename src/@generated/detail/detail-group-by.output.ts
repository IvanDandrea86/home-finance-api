import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DetailCountAggregate } from './detail-count-aggregate.output';
import { DetailAvgAggregate } from './detail-avg-aggregate.output';
import { DetailSumAggregate } from './detail-sum-aggregate.output';
import { DetailMinAggregate } from './detail-min-aggregate.output';
import { DetailMaxAggregate } from './detail-max-aggregate.output';

@ObjectType()
export class DetailGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: true })
  expenseId?: string;

  @Field(() => Int, { nullable: false })
  monthlyCost!: number;

  @Field(() => Int, { nullable: true })
  period?: number;

  @Field(() => DetailCountAggregate, { nullable: true })
  _count?: DetailCountAggregate;

  @Field(() => DetailAvgAggregate, { nullable: true })
  _avg?: DetailAvgAggregate;

  @Field(() => DetailSumAggregate, { nullable: true })
  _sum?: DetailSumAggregate;

  @Field(() => DetailMinAggregate, { nullable: true })
  _min?: DetailMinAggregate;

  @Field(() => DetailMaxAggregate, { nullable: true })
  _max?: DetailMaxAggregate;
}
