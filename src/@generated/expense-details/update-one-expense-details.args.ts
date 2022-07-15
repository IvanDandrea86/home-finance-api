import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsUpdateInput } from './expense-details-update.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';

@ArgsType()
export class UpdateOneExpenseDetailsArgs {
  @Field(() => ExpenseDetailsUpdateInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateInput)
  data!: ExpenseDetailsUpdateInput;

  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;
}
