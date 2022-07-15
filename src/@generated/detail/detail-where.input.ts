import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExpenseRelationFilter } from '../expense/expense-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class DetailWhereInput {
  @Field(() => [DetailWhereInput], { nullable: true })
  AND?: Array<DetailWhereInput>;

  @Field(() => [DetailWhereInput], { nullable: true })
  OR?: Array<DetailWhereInput>;

  @Field(() => [DetailWhereInput], { nullable: true })
  NOT?: Array<DetailWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => ExpenseRelationFilter, { nullable: true })
  Expense?: ExpenseRelationFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  expenseId?: StringNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  monthlyCost?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  period?: IntNullableFilter;
}
