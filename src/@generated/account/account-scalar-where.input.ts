import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAccountTypeFilter } from '../prisma/enum-account-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AccountScalarWhereInput {

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    AND?: Array<AccountScalarWhereInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    OR?: Array<AccountScalarWhereInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    NOT?: Array<AccountScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumAccountTypeFilter, {nullable:true})
    type?: EnumAccountTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    monthlyBudget?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    sold?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    familyId?: StringNullableFilter;
}
