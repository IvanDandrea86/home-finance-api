import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Float } from '@nestjs/graphql';
import { ExpenseUncheckedCreateNestedManyWithoutAccountInput } from '../expense/expense-unchecked-create-nested-many-without-account.input';

@InputType()
export class AccountUncheckedCreateWithoutChargeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AccountType, {nullable:false})
    type!: keyof typeof AccountType;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    monthlyBudget?: number;

    @Field(() => Float, {nullable:true})
    sold?: number;

    @Field(() => String, {nullable:true})
    familyId?: string;

    @Field(() => ExpenseUncheckedCreateNestedManyWithoutAccountInput, {nullable:true})
    Expense?: ExpenseUncheckedCreateNestedManyWithoutAccountInput;
}
