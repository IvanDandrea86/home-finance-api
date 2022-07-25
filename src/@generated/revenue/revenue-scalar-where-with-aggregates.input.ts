import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RevenueScalarWhereWithAggregatesInput {

    @Field(() => [RevenueScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RevenueScalarWhereWithAggregatesInput>;

    @Field(() => [RevenueScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RevenueScalarWhereWithAggregatesInput>;

    @Field(() => [RevenueScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RevenueScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    familyId?: StringWithAggregatesFilter;
}
