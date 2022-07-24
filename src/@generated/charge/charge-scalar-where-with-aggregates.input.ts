import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ChargeScalarWhereWithAggregatesInput {
  @Field(() => [ChargeScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ChargeScalarWhereWithAggregatesInput>;

  @Field(() => [ChargeScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ChargeScalarWhereWithAggregatesInput>;

  @Field(() => [ChargeScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ChargeScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  cost?: FloatWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  accountId?: StringNullableWithAggregatesFilter;
}
