import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsUpdateWithoutExpenseInput } from './expense-details-update-without-expense.input';
import { ExpenseDetailsCreateWithoutExpenseInput } from './expense-details-create-without-expense.input';

@InputType()
export class ExpenseDetailsUpsertWithWhereUniqueWithoutExpenseInput {
  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;

  @Field(() => ExpenseDetailsUpdateWithoutExpenseInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateWithoutExpenseInput)
  update!: ExpenseDetailsUpdateWithoutExpenseInput;

  @Field(() => ExpenseDetailsCreateWithoutExpenseInput, { nullable: false })
  @Type(() => ExpenseDetailsCreateWithoutExpenseInput)
  create!: ExpenseDetailsCreateWithoutExpenseInput;
}
