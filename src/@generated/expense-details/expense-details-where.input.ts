import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExpenseRelationFilter } from '../expense/expense-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ExpenseDetailsWhereInput {
  @Field(() => [ExpenseDetailsWhereInput], { nullable: true })
  AND?: Array<ExpenseDetailsWhereInput>;

  @Field(() => [ExpenseDetailsWhereInput], { nullable: true })
  OR?: Array<ExpenseDetailsWhereInput>;

  @Field(() => [ExpenseDetailsWhereInput], { nullable: true })
  NOT?: Array<ExpenseDetailsWhereInput>;

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
}
