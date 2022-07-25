import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DetailSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    cost?: true;

    @Field(() => Boolean, {nullable:true})
    period?: true;
}
