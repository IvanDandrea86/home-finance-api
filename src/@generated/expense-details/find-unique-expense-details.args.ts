import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueExpenseDetailsArgs {
  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;
}
