import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';
import { RevenueOrderByRelationAggregateInput } from '../revenue/revenue-order-by-relation-aggregate.input';
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input';

@InputType()
export class FamilyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    members?: UserOrderByRelationAggregateInput;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    expenses?: ExpenseOrderByRelationAggregateInput;

    @Field(() => RevenueOrderByRelationAggregateInput, {nullable:true})
    revenues?: RevenueOrderByRelationAggregateInput;

    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    accounts?: AccountOrderByRelationAggregateInput;
}
