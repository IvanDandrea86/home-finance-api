import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutExpensesInput } from '../family/family-create-nested-one-without-expenses.input';

@InputType()
export class ExpenseCreateWithoutExpenseDetailsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;

  @Field(() => FamilyCreateNestedOneWithoutExpensesInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutExpensesInput;
}
