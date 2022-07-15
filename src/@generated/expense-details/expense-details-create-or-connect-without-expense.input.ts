import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsCreateWithoutExpenseInput } from './expense-details-create-without-expense.input';

@InputType()
export class ExpenseDetailsCreateOrConnectWithoutExpenseInput {
  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;

  @Field(() => ExpenseDetailsCreateWithoutExpenseInput, { nullable: false })
  @Type(() => ExpenseDetailsCreateWithoutExpenseInput)
  create!: ExpenseDetailsCreateWithoutExpenseInput;
}
