import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChargeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;
}
