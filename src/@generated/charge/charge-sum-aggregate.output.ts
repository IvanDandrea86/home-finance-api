import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChargeSumAggregate {

    @Field(() => Float, {nullable:true})
    cost?: number;
}
