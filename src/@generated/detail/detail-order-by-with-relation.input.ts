import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExpenseOrderByWithRelationInput } from '../expense/expense-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class DetailOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ExpenseOrderByWithRelationInput, {nullable:true})
    Expense?: ExpenseOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    expenseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    period?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}
