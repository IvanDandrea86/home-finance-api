import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccountCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    monthlyBudget?: true;

    @Field(() => Boolean, {nullable:true})
    sold?: true;

    @Field(() => Boolean, {nullable:true})
    familyId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
