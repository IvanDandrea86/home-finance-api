import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutExpenseDetailsInput } from './expense-create-without-expense-details.input';

@InputType()
export class ExpenseCreateOrConnectWithoutExpenseDetailsInput {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: ExpenseWhereUniqueInput;

    @Field(() => ExpenseCreateWithoutExpenseDetailsInput, {nullable:false})
    @Type(() => ExpenseCreateWithoutExpenseDetailsInput)
    create!: ExpenseCreateWithoutExpenseDetailsInput;
}
