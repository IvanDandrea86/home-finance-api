import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyExpenseDetailsArgs {
  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  @Type(() => ExpenseDetailsWhereInput)
  where?: ExpenseDetailsWhereInput;
}
