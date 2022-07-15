import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateNestedOneWithoutExpenseDetailsInput } from '../expense/expense-create-nested-one-without-expense-details.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ExpenseCreateNestedOneWithoutExpenseDetailsInput, {
    nullable: true,
  })
  Expense?: ExpenseCreateNestedOneWithoutExpenseDetailsInput;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;

  @Field(() => Int, { nullable: true })
  period?: number;
}
