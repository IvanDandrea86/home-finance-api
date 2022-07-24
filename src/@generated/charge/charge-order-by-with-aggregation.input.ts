import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChargeCountOrderByAggregateInput } from './charge-count-order-by-aggregate.input';
import { ChargeAvgOrderByAggregateInput } from './charge-avg-order-by-aggregate.input';
import { ChargeMaxOrderByAggregateInput } from './charge-max-order-by-aggregate.input';
import { ChargeMinOrderByAggregateInput } from './charge-min-order-by-aggregate.input';
import { ChargeSumOrderByAggregateInput } from './charge-sum-order-by-aggregate.input';

@InputType()
export class ChargeOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  accountId?: keyof typeof SortOrder;

  @Field(() => ChargeCountOrderByAggregateInput, { nullable: true })
  _count?: ChargeCountOrderByAggregateInput;

  @Field(() => ChargeAvgOrderByAggregateInput, { nullable: true })
  _avg?: ChargeAvgOrderByAggregateInput;

  @Field(() => ChargeMaxOrderByAggregateInput, { nullable: true })
  _max?: ChargeMaxOrderByAggregateInput;

  @Field(() => ChargeMinOrderByAggregateInput, { nullable: true })
  _min?: ChargeMinOrderByAggregateInput;

  @Field(() => ChargeSumOrderByAggregateInput, { nullable: true })
  _sum?: ChargeSumOrderByAggregateInput;
}
