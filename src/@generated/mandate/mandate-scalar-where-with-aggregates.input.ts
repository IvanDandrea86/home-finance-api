import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class MandateScalarWhereWithAggregatesInput {
  @Field(() => [MandateScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MandateScalarWhereWithAggregatesInput>;

  @Field(() => [MandateScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MandateScalarWhereWithAggregatesInput>;

  @Field(() => [MandateScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MandateScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  status?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter;
}
