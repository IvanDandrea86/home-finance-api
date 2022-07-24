import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutExpenseInput } from './account-create-without-expense.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutExpenseInput } from './account-create-or-connect-without-expense.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutExpenseInput {
  @Field(() => AccountCreateWithoutExpenseInput, { nullable: true })
  @Type(() => AccountCreateWithoutExpenseInput)
  create?: AccountCreateWithoutExpenseInput;

  @Field(() => AccountCreateOrConnectWithoutExpenseInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutExpenseInput)
  connectOrCreate?: AccountCreateOrConnectWithoutExpenseInput;

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: AccountWhereUniqueInput;
}
