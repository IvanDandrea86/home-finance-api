import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsUpdateWithoutExpenseInput } from './expense-details-update-without-expense.input';

@InputType()
export class ExpenseDetailsUpdateWithWhereUniqueWithoutExpenseInput {
  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;

  @Field(() => ExpenseDetailsUpdateWithoutExpenseInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateWithoutExpenseInput)
  data!: ExpenseDetailsUpdateWithoutExpenseInput;
}
