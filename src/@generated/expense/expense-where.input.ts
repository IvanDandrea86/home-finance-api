import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExpenseDetailsListRelationFilter } from '../expense-details/expense-details-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FamilyRelationFilter } from '../family/family-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExpenseWhereInput {
  @Field(() => [ExpenseWhereInput], { nullable: true })
  AND?: Array<ExpenseWhereInput>;

  @Field(() => [ExpenseWhereInput], { nullable: true })
  OR?: Array<ExpenseWhereInput>;

  @Field(() => [ExpenseWhereInput], { nullable: true })
  NOT?: Array<ExpenseWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => ExpenseDetailsListRelationFilter, { nullable: true })
  expenseDetails?: ExpenseDetailsListRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  monthlyCost?: IntFilter;

  @Field(() => FamilyRelationFilter, { nullable: true })
  Family?: FamilyRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  familyId?: StringNullableFilter;
}
