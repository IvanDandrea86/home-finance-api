import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsCreateWithoutExpenseInput } from './expense-details-create-without-expense.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsCreateOrConnectWithoutExpenseInput } from './expense-details-create-or-connect-without-expense.input';
import { ExpenseDetailsCreateManyExpenseInputEnvelope } from './expense-details-create-many-expense-input-envelope.input';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';

@InputType()
export class ExpenseDetailsUncheckedCreateNestedManyWithoutExpenseInput {
  @Field(() => [ExpenseDetailsCreateWithoutExpenseInput], { nullable: true })
  @Type(() => ExpenseDetailsCreateWithoutExpenseInput)
  create?: Array<ExpenseDetailsCreateWithoutExpenseInput>;

  @Field(() => [ExpenseDetailsCreateOrConnectWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => ExpenseDetailsCreateOrConnectWithoutExpenseInput)
  connectOrCreate?: Array<ExpenseDetailsCreateOrConnectWithoutExpenseInput>;

  @Field(() => ExpenseDetailsCreateManyExpenseInputEnvelope, { nullable: true })
  @Type(() => ExpenseDetailsCreateManyExpenseInputEnvelope)
  createMany?: ExpenseDetailsCreateManyExpenseInputEnvelope;

  @Field(() => [ExpenseDetailsWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  connect?: Array<ExpenseDetailsWhereUniqueInput>;
}
