import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DetailAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    period?: keyof typeof SortOrder;
}
