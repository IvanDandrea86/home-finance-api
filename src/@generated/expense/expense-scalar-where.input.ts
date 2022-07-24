import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
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

  @Field(() => FloatFilter, { nullable: true })
  monthlyCost?: FloatFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  familyId?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  accountId?: StringNullableFilter;
}
