import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Charge } from '../charge/charge.model';
import { Float } from '@nestjs/graphql';
import { Family } from '../family/family.model';
import { Expense } from '../expense/expense.model';
import { AccountCount } from './account-count.output';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => AccountType, {nullable:false})
    type!: keyof typeof AccountType;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Charge], {nullable:true})
    charge?: Array<Charge>;

    @Field(() => Float, {nullable:false,defaultValue:0})
    monthlyBudget!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    sold!: number;

    @Field(() => Family, {nullable:true})
    Family?: Family | null;

    @Field(() => String, {nullable:true})
    familyId!: string | null;

    @Field(() => [Expense], {nullable:true})
    Expense?: Array<Expense>;

    @Field(() => AccountCount, {nullable:false})
    _count?: AccountCount;
}
