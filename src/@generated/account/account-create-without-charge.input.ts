import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Float } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutAccountsInput } from '../family/family-create-nested-one-without-accounts.input';
import { ExpenseCreateNestedManyWithoutAccountInput } from '../expense/expense-create-nested-many-without-account.input';

@InputType()
export class AccountCreateWithoutChargeInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => AccountType, { nullable: false })
  type!: keyof typeof AccountType;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Float, { nullable: true })
  monthlyBudget?: number;

  @Field(() => Float, { nullable: true })
  sold?: number;

  @Field(() => FamilyCreateNestedOneWithoutAccountsInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutAccountsInput;

  @Field(() => ExpenseCreateNestedManyWithoutAccountInput, { nullable: true })
  Expense?: ExpenseCreateNestedManyWithoutAccountInput;
}
