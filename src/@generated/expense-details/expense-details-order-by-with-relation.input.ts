import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExpenseOrderByWithRelationInput } from '../expense/expense-order-by-with-relation.input';

@InputType()
export class ExpenseDetailsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ExpenseOrderByWithRelationInput, { nullable: true })
  Expense?: ExpenseOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  expenseId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;
}
