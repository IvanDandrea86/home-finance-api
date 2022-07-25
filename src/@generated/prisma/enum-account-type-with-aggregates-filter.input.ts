import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from './account-type.enum';
import { NestedEnumAccountTypeWithAggregatesFilter } from './nested-enum-account-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAccountTypeFilter } from './nested-enum-account-type-filter.input';

@InputType()
export class EnumAccountTypeWithAggregatesFilter {

    @Field(() => AccountType, {nullable:true})
    equals?: keyof typeof AccountType;

    @Field(() => [AccountType], {nullable:true})
    in?: Array<keyof typeof AccountType>;

    @Field(() => [AccountType], {nullable:true})
    notIn?: Array<keyof typeof AccountType>;

    @Field(() => NestedEnumAccountTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAccountTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAccountTypeFilter, {nullable:true})
    _min?: NestedEnumAccountTypeFilter;

    @Field(() => NestedEnumAccountTypeFilter, {nullable:true})
    _max?: NestedEnumAccountTypeFilter;
}
