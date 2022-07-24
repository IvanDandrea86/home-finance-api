import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAccountTypeFilter } from '../prisma/enum-account-type-filter.input';
import { ChargeListRelationFilter } from '../charge/charge-list-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FamilyRelationFilter } from '../family/family-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';

@InputType()
export class AccountWhereInput {
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;

  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;

  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => EnumAccountTypeFilter, { nullable: true })
  type?: EnumAccountTypeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => ChargeListRelationFilter, { nullable: true })
  charge?: ChargeListRelationFilter;

  @Field(() => FloatFilter, { nullable: true })
  monthlyBudget?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  sold?: FloatFilter;

  @Field(() => FamilyRelationFilter, { nullable: true })
  Family?: FamilyRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  familyId?: StringNullableFilter;

  @Field(() => ExpenseListRelationFilter, { nullable: true })
  Expense?: ExpenseListRelationFilter;
}
