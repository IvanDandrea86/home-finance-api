import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DetailSumAggregate {

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    period?: number;
}
