import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExpenseCountAggregate } from './expense-count-aggregate.output';
import { ExpenseAvgAggregate } from './expense-avg-aggregate.output';
import { ExpenseSumAggregate } from './expense-sum-aggregate.output';
import { ExpenseMinAggregate } from './expense-min-aggregate.output';
import { ExpenseMaxAggregate } from './expense-max-aggregate.output';

@ObjectType()
export class ExpenseGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  monthlyCost!: number;

  @Field(() => String, { nullable: true })
  familyId?: string;

  @Field(() => ExpenseCountAggregate, { nullable: true })
  _count?: ExpenseCountAggregate;

  @Field(() => ExpenseAvgAggregate, { nullable: true })
  _avg?: ExpenseAvgAggregate;

  @Field(() => ExpenseSumAggregate, { nullable: true })
  _sum?: ExpenseSumAggregate;

  @Field(() => ExpenseMinAggregate, { nullable: true })
  _min?: ExpenseMinAggregate;

  @Field(() => ExpenseMaxAggregate, { nullable: true })
  _max?: ExpenseMaxAggregate;
}
