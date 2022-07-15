import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExpenseScalarWhereInput {
  @Field(() => [ExpenseScalarWhereInput], { nullable: true })
  AND?: Array<ExpenseScalarWhereInput>;

  @Field(() => [ExpenseScalarWhereInput], { nullable: true })
  OR?: Array<ExpenseScalarWhereInput>;

  @Field(() => [ExpenseScalarWhereInput], { nullable: true })
  NOT?: Array<ExpenseScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  monthlyCost?: IntFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  familyId?: StringNullableFilter;
}
