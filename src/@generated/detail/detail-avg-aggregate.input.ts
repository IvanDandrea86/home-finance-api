import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    cost?: true;

    @Field(() => Boolean, {nullable:true})
    period?: true;
}
