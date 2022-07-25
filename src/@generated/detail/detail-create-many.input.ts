import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DetailCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    expenseId?: string;

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    period?: number;

    @Field(() => String, {nullable:true})
    userId?: string;
}
