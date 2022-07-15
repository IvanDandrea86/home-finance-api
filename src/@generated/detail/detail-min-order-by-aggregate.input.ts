import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DetailMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  expenseId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  period?: keyof typeof SortOrder;
}
