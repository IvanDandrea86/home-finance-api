import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpenseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    monthlyCost?: true;
}
