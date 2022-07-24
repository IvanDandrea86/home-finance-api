import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MandateCountOrderByAggregateInput } from './mandate-count-order-by-aggregate.input';
import { MandateMaxOrderByAggregateInput } from './mandate-max-order-by-aggregate.input';
import { MandateMinOrderByAggregateInput } from './mandate-min-order-by-aggregate.input';

@InputType()
export class MandateOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => MandateCountOrderByAggregateInput, { nullable: true })
  _count?: MandateCountOrderByAggregateInput;

  @Field(() => MandateMaxOrderByAggregateInput, { nullable: true })
  _max?: MandateMaxOrderByAggregateInput;

  @Field(() => MandateMinOrderByAggregateInput, { nullable: true })
  _min?: MandateMinOrderByAggregateInput;
}
