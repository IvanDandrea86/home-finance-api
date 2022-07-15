import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsCreateNestedManyWithoutExpenseInput } from '../expense-details/expense-details-create-nested-many-without-expense.input';
import { Int } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutExpensesInput } from '../family/family-create-nested-one-without-expenses.input';

@InputType()
export class ExpenseCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ExpenseDetailsCreateNestedManyWithoutExpenseInput, {
    nullable: true,
  })
  expenseDetails?: ExpenseDetailsCreateNestedManyWithoutExpenseInput;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;

  @Field(() => FamilyCreateNestedOneWithoutExpensesInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutExpensesInput;
}
