import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExpenseCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    monthlyCost!: number;

    @Field(() => Int, {nullable:false})
    familyId!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
