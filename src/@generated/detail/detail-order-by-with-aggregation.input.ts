import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DetailCountOrderByAggregateInput } from './detail-count-order-by-aggregate.input';
import { DetailAvgOrderByAggregateInput } from './detail-avg-order-by-aggregate.input';
import { DetailMaxOrderByAggregateInput } from './detail-max-order-by-aggregate.input';
import { DetailMinOrderByAggregateInput } from './detail-min-order-by-aggregate.input';
import { DetailSumOrderByAggregateInput } from './detail-sum-order-by-aggregate.input';

@InputType()
export class DetailOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  expenseId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  period?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => DetailCountOrderByAggregateInput, { nullable: true })
  _count?: DetailCountOrderByAggregateInput;

  @Field(() => DetailAvgOrderByAggregateInput, { nullable: true })
  _avg?: DetailAvgOrderByAggregateInput;

  @Field(() => DetailMaxOrderByAggregateInput, { nullable: true })
  _max?: DetailMaxOrderByAggregateInput;

  @Field(() => DetailMinOrderByAggregateInput, { nullable: true })
  _min?: DetailMinOrderByAggregateInput;

  @Field(() => DetailSumOrderByAggregateInput, { nullable: true })
  _sum?: DetailSumOrderByAggregateInput;
}
