import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUncheckedCreateNestedManyWithoutExpenseInput } from '../detail/detail-unchecked-create-nested-many-without-expense.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExpenseUncheckedCreateWithoutFamilyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => DetailUncheckedCreateNestedManyWithoutExpenseInput, {
    nullable: true,
  })
  expenseDetails?: DetailUncheckedCreateNestedManyWithoutExpenseInput;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;
}