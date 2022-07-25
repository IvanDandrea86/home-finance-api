import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutAccountInput } from './expense-create-without-account.input';

@InputType()
export class ExpenseCreateOrConnectWithoutAccountInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: ExpenseWhereUniqueInput;

    @Field(() => ExpenseCreateWithoutAccountInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutAccountInput)
    create!: ExpenseCreateWithoutAccountInput;
}
