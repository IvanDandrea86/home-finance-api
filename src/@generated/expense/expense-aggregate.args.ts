import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { Type } from 'class-transformer';
import { ExpenseOrderByWithRelationInput } from './expense-order-by-with-relation.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpenseCountAggregateInput } from './expense-count-aggregate.input';
import { ExpenseAvgAggregateInput } from './expense-avg-aggregate.input';
import { ExpenseSumAggregateInput } from './expense-sum-aggregate.input';
import { ExpenseMinAggregateInput } from './expense-min-aggregate.input';
import { ExpenseMaxAggregateInput } from './expense-max-aggregate.input';

@ArgsType()
export class ExpenseAggregateArgs {
  @Field(() => ExpenseWhereInput, { nullable: true })
  @Type(() => ExpenseWhereInput)
  where?: ExpenseWhereInput;

  @Field(() => [ExpenseOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ExpenseOrderByWithRelationInput>;

  @Field(() => ExpenseWhereUniqueInput, { nullable: true })
  cursor?: ExpenseWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ExpenseCountAggregateInput, { nullable: true })
  _count?: ExpenseCountAggregateInput;

  @Field(() => ExpenseAvgAggregateInput, { nullable: true })
  _avg?: ExpenseAvgAggregateInput;

  @Field(() => ExpenseSumAggregateInput, { nullable: true })
  _sum?: ExpenseSumAggregateInput;

  @Field(() => ExpenseMinAggregateInput, { nullable: true })
  _min?: ExpenseMinAggregateInput;

  @Field(() => ExpenseMaxAggregateInput, { nullable: true })
  _max?: ExpenseMaxAggregateInput;
}
