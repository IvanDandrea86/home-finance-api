import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from './account-type.enum';
import { NestedEnumAccountTypeFilter } from './nested-enum-account-type-filter.input';

@InputType()
export class EnumAccountTypeFilter {

    @Field(() => AccountType, {nullable:true})
    equals?: keyof typeof AccountType;

    @Field(() => [AccountType], {nullable:true})
    in?: Array<keyof typeof AccountType>;

    @Field(() => [AccountType], {nullable:true})
    notIn?: Array<keyof typeof AccountType>;

    @Field(() => NestedEnumAccountTypeFilter, {nullable:true})
    not?: NestedEnumAccountTypeFilter;
}
