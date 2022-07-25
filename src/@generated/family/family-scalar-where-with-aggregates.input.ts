import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FamilyScalarWhereWithAggregatesInput {

    @Field(() => [FamilyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FamilyScalarWhereWithAggregatesInput>;

    @Field(() => [FamilyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FamilyScalarWhereWithAggregatesInput>;

    @Field(() => [FamilyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FamilyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
