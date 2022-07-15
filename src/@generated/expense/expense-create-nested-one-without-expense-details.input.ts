import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutExpenseDetailsInput } from './expense-create-without-expense-details.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutExpenseDetailsInput } from './expense-create-or-connect-without-expense-details.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseCreateNestedOneWithoutExpenseDetailsInput {
  @Field(() => ExpenseCreateWithoutExpenseDetailsInput, { nullable: true })
  @Type(() => ExpenseCreateWithoutExpenseDetailsInput)
  create?: ExpenseCreateWithoutExpenseDetailsInput;

  @Field(() => ExpenseCreateOrConnectWithoutExpenseDetailsInput, {
    nullable: true,
  })
  @Type(() => ExpenseCreateOrConnectWithoutExpenseDetailsInput)
  connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseDetailsInput;

  @Field(() => ExpenseWhereUniqueInput, { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  connect?: ExpenseWhereUniqueInput;
}
