import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedManyWithoutExpenseInput } from '../detail/detail-create-nested-many-without-expense.input';
import { Float } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutExpensesInput } from '../family/family-create-nested-one-without-expenses.input';
import { AccountCreateNestedOneWithoutExpenseInput } from '../account/account-create-nested-one-without-expense.input';

@InputType()
export class ExpenseCreateInput {
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

  @Field(() => Float, { nullable: true })
  monthlyCost?: number;

  @Field(() => FamilyCreateNestedOneWithoutExpensesInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutExpensesInput;

  @Field(() => AccountCreateNestedOneWithoutExpenseInput, { nullable: true })
  Account?: AccountCreateNestedOneWithoutExpenseInput;
}
