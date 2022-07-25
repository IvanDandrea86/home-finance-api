import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RevenueCountOrderByAggregateInput } from './revenue-count-order-by-aggregate.input';
import { RevenueMaxOrderByAggregateInput } from './revenue-max-order-by-aggregate.input';
import { RevenueMinOrderByAggregateInput } from './revenue-min-order-by-aggregate.input';

@InputType()
export class RevenueOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    familyId?: keyof typeof SortOrder;

    @Field(() => RevenueCountOrderByAggregateInput, {nullable:true})
    _count?: RevenueCountOrderByAggregateInput;

    @Field(() => RevenueMaxOrderByAggregateInput, {nullable:true})
    _max?: RevenueMaxOrderByAggregateInput;

    @Field(() => RevenueMinOrderByAggregateInput, {nullable:true})
    _min?: RevenueMinOrderByAggregateInput;
}
