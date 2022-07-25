import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ExpenseScalarWhereWithAggregatesInput {

    @Field(() => [ExpenseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExpenseScalarWhereWithAggregatesInput>;

    @Field(() => [ExpenseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExpenseScalarWhereWithAggregatesInput>;

    @Field(() => [ExpenseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExpenseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    monthlyCost?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    familyId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    accountId?: StringNullableWithAggregatesFilter;
}
