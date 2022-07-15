import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedManyWithoutExpenseInput } from '../detail/detail-create-nested-many-without-expense.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExpenseCreateWithoutFamilyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => DetailCreateNestedManyWithoutExpenseInput, { nullable: true })
  expenseDetails?: DetailCreateNestedManyWithoutExpenseInput;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;
}
