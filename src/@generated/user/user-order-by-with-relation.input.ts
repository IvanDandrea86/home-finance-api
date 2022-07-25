import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';
import { FamilyOrderByWithRelationInput } from '../family/family-order-by-with-relation.input';
import { RevenueOrderByRelationAggregateInput } from '../revenue/revenue-order-by-relation-aggregate.input';
import { DetailOrderByRelationAggregateInput } from '../detail/detail-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validationToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLogin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verificationStatus?: keyof typeof SortOrder;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    Permission?: PermissionOrderByWithRelationInput;

    @Field(() => FamilyOrderByWithRelationInput, {nullable:true})
    Family?: FamilyOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    familyId?: keyof typeof SortOrder;

    @Field(() => RevenueOrderByRelationAggregateInput, {nullable:true})
    Revenue?: RevenueOrderByRelationAggregateInput;

    @Field(() => DetailOrderByRelationAggregateInput, {nullable:true})
    Mandate?: DetailOrderByRelationAggregateInput;
}
