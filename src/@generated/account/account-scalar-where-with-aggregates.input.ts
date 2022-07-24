import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumAccountTypeWithAggregatesFilter } from '../prisma/enum-account-type-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class AccountScalarWhereWithAggregatesInput {
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AccountScalarWhereWithAggregatesInput>;

  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AccountScalarWhereWithAggregatesInput>;

  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AccountScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => EnumAccountTypeWithAggregatesFilter, { nullable: true })
  type?: EnumAccountTypeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  monthlyBudget?: FloatWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  sold?: FloatWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  familyId?: StringNullableWithAggregatesFilter;
}
