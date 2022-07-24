import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutExpenseInput } from './account-update-without-expense.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutExpenseInput } from './account-create-without-expense.input';

@InputType()
export class AccountUpsertWithoutExpenseInput {
  @Field(() => AccountUpdateWithoutExpenseInput, { nullable: false })
  @Type(() => AccountUpdateWithoutExpenseInput)
  update!: AccountUpdateWithoutExpenseInput;

  @Field(() => AccountCreateWithoutExpenseInput, { nullable: false })
  @Type(() => AccountCreateWithoutExpenseInput)
  create!: AccountCreateWithoutExpenseInput;
}
