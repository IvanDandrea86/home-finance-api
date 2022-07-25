import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChargeOrderByRelationAggregateInput } from '../charge/charge-order-by-relation-aggregate.input';
import { FamilyOrderByWithRelationInput } from '../family/family-order-by-with-relation.input';
import { ExpenseOrderByRelationAggregateInput } from '../expense/expense-order-by-relation-aggregate.input';

@InputType()
export class AccountOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ChargeOrderByRelationAggregateInput, {nullable:true})
    charge?: ChargeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    monthlyBudget?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold?: keyof typeof SortOrder;

    @Field(() => FamilyOrderByWithRelationInput, {nullable:true})
    Family?: FamilyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    familyId?: keyof typeof SortOrder;

    @Field(() => ExpenseOrderByRelationAggregateInput, {nullable:true})
    Expense?: ExpenseOrderByRelationAggregateInput;
}
