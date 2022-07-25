import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExpenseCount {

    @Field(() => Int, {nullable:false})
    expenseDetails?: number;
}
