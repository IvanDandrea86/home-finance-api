import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExpenseDetailsAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;
}
