import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExpenseDetailsCountOrderByAggregateInput } from './expense-details-count-order-by-aggregate.input';
import { ExpenseDetailsAvgOrderByAggregateInput } from './expense-details-avg-order-by-aggregate.input';
import { ExpenseDetailsMaxOrderByAggregateInput } from './expense-details-max-order-by-aggregate.input';
import { ExpenseDetailsMinOrderByAggregateInput } from './expense-details-min-order-by-aggregate.input';
import { ExpenseDetailsSumOrderByAggregateInput } from './expense-details-sum-order-by-aggregate.input';

@InputType()
export class ExpenseDetailsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  expenseId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;

  @Field(() => ExpenseDetailsCountOrderByAggregateInput, { nullable: true })
  _count?: ExpenseDetailsCountOrderByAggregateInput;

  @Field(() => ExpenseDetailsAvgOrderByAggregateInput, { nullable: true })
  _avg?: ExpenseDetailsAvgOrderByAggregateInput;

  @Field(() => ExpenseDetailsMaxOrderByAggregateInput, { nullable: true })
  _max?: ExpenseDetailsMaxOrderByAggregateInput;

  @Field(() => ExpenseDetailsMinOrderByAggregateInput, { nullable: true })
  _min?: ExpenseDetailsMinOrderByAggregateInput;

  @Field(() => ExpenseDetailsSumOrderByAggregateInput, { nullable: true })
  _sum?: ExpenseDetailsSumOrderByAggregateInput;
}
