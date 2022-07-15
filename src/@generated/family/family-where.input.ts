import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ExpenseListRelationFilter } from '../expense/expense-list-relation-filter.input';
import { RevenueListRelationFilter } from '../revenue/revenue-list-relation-filter.input';

@InputType()
export class FamilyWhereInput {
  @Field(() => [FamilyWhereInput], { nullable: true })
  AND?: Array<FamilyWhereInput>;

  @Field(() => [FamilyWhereInput], { nullable: true })
  OR?: Array<FamilyWhereInput>;

  @Field(() => [FamilyWhereInput], { nullable: true })
  NOT?: Array<FamilyWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  members?: UserListRelationFilter;

  @Field(() => ExpenseListRelationFilter, { nullable: true })
  expenses?: ExpenseListRelationFilter;

  @Field(() => RevenueListRelationFilter, { nullable: true })
  revenues?: RevenueListRelationFilter;
}
