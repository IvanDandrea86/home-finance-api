import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsCreateInput } from './expense-details-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExpenseDetailsArgs {
  @Field(() => ExpenseDetailsCreateInput, { nullable: false })
  @Type(() => ExpenseDetailsCreateInput)
  data!: ExpenseDetailsCreateInput;
}
