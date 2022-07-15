import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereInput } from './expense-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyExpenseArgs {
  @Field(() => ExpenseWhereInput, { nullable: true })
  @Type(() => ExpenseWhereInput)
  where?: ExpenseWhereInput;
}
