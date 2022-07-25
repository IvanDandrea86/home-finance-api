import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DetailAvgAggregate {

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Float, {nullable:true})
    period?: number;
}
