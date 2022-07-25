import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutExpenseInput } from './account-create-without-expense.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutExpenseInput } from './account-create-or-connect-without-expense.input';
import { AccountUpsertWithoutExpenseInput } from './account-upsert-without-expense.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithoutExpenseInput } from './account-update-without-expense.input';

@InputType()
export class AccountUpdateOneWithoutExpenseNestedInput {

    @Field(() => AccountCreateWithoutExpenseInput, {nullable:true})
    @Type(() => AccountCreateWithoutExpenseInput)
    create?: AccountCreateWithoutExpenseInput;

    @Field(() => AccountCreateOrConnectWithoutExpenseInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutExpenseInput)
    connectOrCreate?: AccountCreateOrConnectWithoutExpenseInput;

    @Field(() => AccountUpsertWithoutExpenseInput, {nullable:true})
    @Type(() => AccountUpsertWithoutExpenseInput)
    upsert?: AccountUpsertWithoutExpenseInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;

    @Field(() => AccountUpdateWithoutExpenseInput, {nullable:true})
    @Type(() => AccountUpdateWithoutExpenseInput)
    update?: AccountUpdateWithoutExpenseInput;
}
