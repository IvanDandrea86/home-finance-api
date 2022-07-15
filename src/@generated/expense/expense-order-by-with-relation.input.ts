import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExpenseDetailsOrderByRelationAggregateInput } from '../expense-details/expense-details-order-by-relation-aggregate.input';
import { FamilyOrderByWithRelationInput } from '../family/family-order-by-with-relation.input';

@InputType()
export class ExpenseOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => ExpenseDetailsOrderByRelationAggregateInput, { nullable: true })
  expenseDetails?: ExpenseDetailsOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  monthlyCost?: keyof typeof SortOrder;

  @Field(() => FamilyOrderByWithRelationInput, { nullable: true })
  Family?: FamilyOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  familyId?: keyof typeof SortOrder;
}
