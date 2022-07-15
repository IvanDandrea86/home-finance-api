import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsUpdateManyMutationInput } from './expense-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';

@ArgsType()
export class UpdateManyExpenseDetailsArgs {
  @Field(() => ExpenseDetailsUpdateManyMutationInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateManyMutationInput)
  data!: ExpenseDetailsUpdateManyMutationInput;

  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  @Type(() => ExpenseDetailsWhereInput)
  where?: ExpenseDetailsWhereInput;
}
