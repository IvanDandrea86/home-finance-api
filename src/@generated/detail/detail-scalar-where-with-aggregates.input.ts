import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class DetailScalarWhereWithAggregatesInput {
  @Field(() => [DetailScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<DetailScalarWhereWithAggregatesInput>;

  @Field(() => [DetailScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<DetailScalarWhereWithAggregatesInput>;

  @Field(() => [DetailScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<DetailScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  expenseId?: StringNullableWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  cost?: FloatWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  period?: IntNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  userId?: StringNullableWithAggregatesFilter;
}
