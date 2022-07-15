import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ExpenseDetailsScalarWhereInput {
  @Field(() => [ExpenseDetailsScalarWhereInput], { nullable: true })
  AND?: Array<ExpenseDetailsScalarWhereInput>;

  @Field(() => [ExpenseDetailsScalarWhereInput], { nullable: true })
  OR?: Array<ExpenseDetailsScalarWhereInput>;

  @Field(() => [ExpenseDetailsScalarWhereInput], { nullable: true })
  NOT?: Array<ExpenseDetailsScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  expenseId?: StringNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  monthlyCost?: IntFilter;
}
