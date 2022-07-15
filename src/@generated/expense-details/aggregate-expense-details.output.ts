import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExpenseDetailsCountAggregate } from './expense-details-count-aggregate.output';
import { ExpenseDetailsAvgAggregate } from './expense-details-avg-aggregate.output';
import { ExpenseDetailsSumAggregate } from './expense-details-sum-aggregate.output';
import { ExpenseDetailsMinAggregate } from './expense-details-min-aggregate.output';
import { ExpenseDetailsMaxAggregate } from './expense-details-max-aggregate.output';

@ObjectType()
export class AggregateExpenseDetails {
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
