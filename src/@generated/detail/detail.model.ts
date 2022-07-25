import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Expense } from '../expense/expense.model';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Detail {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Expense, {nullable:true})
    Expense?: Expense | null;

    @Field(() => String, {nullable:true})
    expenseId!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    cost!: number;

    @Field(() => Int, {nullable:true,defaultValue:12})
    period!: number | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;
}
