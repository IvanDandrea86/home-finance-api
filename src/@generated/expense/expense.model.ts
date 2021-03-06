import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Detail } from '../detail/detail.model';
import { Float } from '@nestjs/graphql';
import { Family } from '../family/family.model';
import { Account } from '../account/account.model';
import { ExpenseCount } from './expense-count.output';

@ObjectType()
export class Expense {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Detail], {nullable:true})
    expenseDetails?: Array<Detail>;

    @Field(() => Float, {nullable:false,defaultValue:0})
    monthlyCost!: number;

    @Field(() => Family, {nullable:true})
    Family?: Family | null;

    @Field(() => String, {nullable:true})
    familyId!: string | null;

    @Field(() => Account, {nullable:true})
    Account?: Account | null;

    @Field(() => String, {nullable:true})
    accountId!: string | null;

    @Field(() => ExpenseCount, {nullable:false})
    _count?: ExpenseCount;
}
