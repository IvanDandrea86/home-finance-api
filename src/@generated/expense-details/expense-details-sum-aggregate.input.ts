import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpenseDetailsSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  monthlyCost?: true;
}
