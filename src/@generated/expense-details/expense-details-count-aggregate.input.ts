import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpenseDetailsCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  expenseId?: true;

  @Field(() => Boolean, { nullable: true })
  monthlyCost?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
