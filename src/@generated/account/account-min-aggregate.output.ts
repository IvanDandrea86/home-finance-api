import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AccountMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AccountType, {nullable:true})
    type?: keyof typeof AccountType;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    monthlyBudget?: number;

    @Field(() => Float, {nullable:true})
    sold?: number;

    @Field(() => String, {nullable:true})
    familyId?: string;
}
