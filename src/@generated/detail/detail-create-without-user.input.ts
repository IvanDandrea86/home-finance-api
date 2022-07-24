import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateNestedOneWithoutExpenseDetailsInput } from '../expense/expense-create-nested-one-without-expense-details.input';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ExpenseCreateNestedOneWithoutExpenseDetailsInput, {
    nullable: true,
  })
  Expense?: ExpenseCreateNestedOneWithoutExpenseDetailsInput;

  @Field(() => Float, { nullable: true })
  cost?: number;

  @Field(() => Int, { nullable: true })
  period?: number;
}
