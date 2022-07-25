import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutExpenseInput } from './account-create-without-expense.input';

@InputType()
export class AccountCreateOrConnectWithoutExpenseInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountCreateWithoutExpenseInput, {nullable:false})
    @Type(() => AccountCreateWithoutExpenseInput)
    create!: AccountCreateWithoutExpenseInput;
}
