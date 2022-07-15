import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AccountSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  monthlyBudget?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sold?: keyof typeof SortOrder;
}
