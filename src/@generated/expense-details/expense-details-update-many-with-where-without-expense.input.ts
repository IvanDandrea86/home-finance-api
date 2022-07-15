import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsScalarWhereInput } from './expense-details-scalar-where.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsUpdateManyMutationInput } from './expense-details-update-many-mutation.input';

@InputType()
export class ExpenseDetailsUpdateManyWithWhereWithoutExpenseInput {
  @Field(() => ExpenseDetailsScalarWhereInput, { nullable: false })
  @Type(() => ExpenseDetailsScalarWhereInput)
  where!: ExpenseDetailsScalarWhereInput;

  @Field(() => ExpenseDetailsUpdateManyMutationInput, { nullable: false })
  @Type(() => ExpenseDetailsUpdateManyMutationInput)
  data!: ExpenseDetailsUpdateManyMutationInput;
}
