import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsCreateInput } from './expense-details-create.input';
import { ExpenseDetailsUpdateInput } from './expense-details-update.input';

@ArgsType()
export class UpsertOneExpenseDetailsArgs {
  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  where!: ExpenseDetailsWhereUniqueInput;

  @Field(() => ExpenseDetailsCreateInput, { nullable: false })
  @Type(() => ExpenseDetailsCreateInput)
  create!: ExpenseDetailsCreateInput;

  @Field(() => ExpenseDetailsUpdateInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateInput)
  update!: ExpenseDetailsUpdateInput;
}
