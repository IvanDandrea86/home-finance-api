import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUpdateWithoutExpenseDetailsInput } from './expense-update-without-expense-details.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutExpenseDetailsInput } from './expense-create-without-expense-details.input';

@InputType()
export class ExpenseUpsertWithoutExpenseDetailsInput {
  @Field(() => ExpenseUpdateWithoutExpenseDetailsInput, { nullable: false })
  @Type(() => ExpenseUpdateWithoutExpenseDetailsInput)
  update!: ExpenseUpdateWithoutExpenseDetailsInput;

  @Field(() => ExpenseCreateWithoutExpenseDetailsInput, { nullable: false })
  @Type(() => ExpenseCreateWithoutExpenseDetailsInput)
  create!: ExpenseCreateWithoutExpenseDetailsInput;
}
