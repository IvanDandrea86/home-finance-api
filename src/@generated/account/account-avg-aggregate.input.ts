import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AccountAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  monthlyBudget?: true;

  @Field(() => Boolean, { nullable: true })
  sold?: true;
}
