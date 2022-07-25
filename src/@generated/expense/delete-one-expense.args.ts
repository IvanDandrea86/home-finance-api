import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneExpenseArgs {

    @Field(() => ExpenseWhereUniqueInput, {nullable:false})
    @Type(() => ExpenseWhereUniqueInput)
    where!: ExpenseWhereUniqueInput;
}
