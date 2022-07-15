import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutExpenseDetailsInput } from './expense-create-without-expense-details.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutExpenseDetailsInput } from './expense-create-or-connect-without-expense-details.input';
import { ExpenseUpsertWithoutExpenseDetailsInput } from './expense-upsert-without-expense-details.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithoutExpenseDetailsInput } from './expense-update-without-expense-details.input';

@InputType()
export class ExpenseUpdateOneWithoutExpenseDetailsInput {
  @Field(() => ExpenseCreateWithoutExpenseDetailsInput, { nullable: true })
  @Type(() => ExpenseCreateWithoutExpenseDetailsInput)
  create?: ExpenseCreateWithoutExpenseDetailsInput;

  @Field(() => ExpenseCreateOrConnectWithoutExpenseDetailsInput, {
    nullable: true,
  })
  @Type(() => ExpenseCreateOrConnectWithoutExpenseDetailsInput)
  connectOrCreate?: ExpenseCreateOrConnectWithoutExpenseDetailsInput;

  @Field(() => ExpenseUpsertWithoutExpenseDetailsInput, { nullable: true })
  @Type(() => ExpenseUpsertWithoutExpenseDetailsInput)
  upsert?: ExpenseUpsertWithoutExpenseDetailsInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ExpenseWhereUniqueInput, { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  connect?: ExpenseWhereUniqueInput;

  @Field(() => ExpenseUpdateWithoutExpenseDetailsInput, { nullable: true })
  @Type(() => ExpenseUpdateWithoutExpenseDetailsInput)
  update?: ExpenseUpdateWithoutExpenseDetailsInput;
}
