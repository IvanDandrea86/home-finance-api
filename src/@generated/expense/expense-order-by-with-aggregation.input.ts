import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExpenseCountOrderByAggregateInput } from './expense-count-order-by-aggregate.input';
import { ExpenseAvgOrderByAggregateInput } from './expense-avg-order-by-aggregate.input';
import { ExpenseMaxOrderByAggregateInput } from './expense-max-order-by-aggregate.input';
import { ExpenseMinOrderByAggregateInput } from './expense-min-order-by-aggregate.input';
import { ExpenseSumOrderByAggregateInput } from './expense-sum-order-by-aggregate.input';

@InputType()
export class ExpenseOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  familyId?: keyof typeof SortOrder;

  @Field(() => ExpenseCountOrderByAggregateInput, { nullable: true })
  _count?: ExpenseCountOrderByAggregateInput;

  @Field(() => ExpenseAvgOrderByAggregateInput, { nullable: true })
  _avg?: ExpenseAvgOrderByAggregateInput;

  @Field(() => ExpenseMaxOrderByAggregateInput, { nullable: true })
  _max?: ExpenseMaxOrderByAggregateInput;

  @Field(() => ExpenseMinOrderByAggregateInput, { nullable: true })
  _min?: ExpenseMinOrderByAggregateInput;

  @Field(() => ExpenseSumOrderByAggregateInput, { nullable: true })
  _sum?: ExpenseSumOrderByAggregateInput;
}
