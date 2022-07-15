import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsUncheckedCreateNestedManyWithoutExpenseInput } from '../expense-details/expense-details-unchecked-create-nested-many-without-expense.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExpenseUncheckedCreateWithoutFamilyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ExpenseDetailsUncheckedCreateNestedManyWithoutExpenseInput, {
    nullable: true,
  })
  expenseDetails?: ExpenseDetailsUncheckedCreateNestedManyWithoutExpenseInput;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;
}
