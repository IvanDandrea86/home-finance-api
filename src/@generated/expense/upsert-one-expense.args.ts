import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateInput } from './expense-create.input';
import { ExpenseUpdateInput } from './expense-update.input';

@ArgsType()
export class UpsertOneExpenseArgs {
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseWhereUniqueInput)
  where!: ExpenseWhereUniqueInput;

  @Field(() => ExpenseCreateInput, { nullable: false })
  @Type(() => ExpenseCreateInput)
  create!: ExpenseCreateInput;

  @Field(() => ExpenseUpdateInput, { nullable: false })
  @Type(() => ExpenseUpdateInput)
  update!: ExpenseUpdateInput;
}
