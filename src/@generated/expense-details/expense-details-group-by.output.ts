import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExpenseDetailsCountAggregate } from './expense-details-count-aggregate.output';
import { ExpenseDetailsAvgAggregate } from './expense-details-avg-aggregate.output';
import { ExpenseDetailsSumAggregate } from './expense-details-sum-aggregate.output';
import { ExpenseDetailsMinAggregate } from './expense-details-min-aggregate.output';
import { ExpenseDetailsMaxAggregate } from './expense-details-max-aggregate.output';

@ObjectType()
export class ExpenseDetailsGroupBy {
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

  @Field(() => ExpenseDetailsCountAggregate, { nullable: true })
  _count?: ExpenseDetailsCountAggregate;

  @Field(() => ExpenseDetailsAvgAggregate, { nullable: true })
  _avg?: ExpenseDetailsAvgAggregate;

  @Field(() => ExpenseDetailsSumAggregate, { nullable: true })
  _sum?: ExpenseDetailsSumAggregate;

  @Field(() => ExpenseDetailsMinAggregate, { nullable: true })
  _min?: ExpenseDetailsMinAggregate;

  @Field(() => ExpenseDetailsMaxAggregate, { nullable: true })
  _max?: ExpenseDetailsMaxAggregate;
}
