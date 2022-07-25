import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ChargeWhereInput {

    @Field(() => [ChargeWhereInput], {nullable:true})
    AND?: Array<ChargeWhereInput>;

    @Field(() => [ChargeWhereInput], {nullable:true})
    OR?: Array<ChargeWhereInput>;

    @Field(() => [ChargeWhereInput], {nullable:true})
    NOT?: Array<ChargeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FloatFilter, {nullable:true})
    cost?: FloatFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    Account?: AccountRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accountId?: StringNullableFilter;
}
