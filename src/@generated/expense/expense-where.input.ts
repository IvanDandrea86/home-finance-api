import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DetailListRelationFilter } from '../detail/detail-list-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FamilyRelationFilter } from '../family/family-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

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

  @Field(() => DetailListRelationFilter, { nullable: true })
  expenseDetails?: DetailListRelationFilter;

  @Field(() => FloatFilter, { nullable: true })
  monthlyCost?: FloatFilter;

  @Field(() => FamilyRelationFilter, { nullable: true })
  Family?: FamilyRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  familyId?: StringNullableFilter;

  @Field(() => AccountRelationFilter, { nullable: true })
  Account?: AccountRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  accountId?: StringNullableFilter;
}
