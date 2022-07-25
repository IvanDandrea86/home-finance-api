import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from './verification-status.enum';
import { NestedEnumVerificationStatusWithAggregatesFilter } from './nested-enum-verification-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumVerificationStatusFilter } from './nested-enum-verification-status-filter.input';

@InputType()
export class EnumVerificationStatusWithAggregatesFilter {

    @Field(() => VerificationStatus, {nullable:true})
    equals?: keyof typeof VerificationStatus;

    @Field(() => [VerificationStatus], {nullable:true})
    in?: Array<keyof typeof VerificationStatus>;

    @Field(() => [VerificationStatus], {nullable:true})
    notIn?: Array<keyof typeof VerificationStatus>;

    @Field(() => NestedEnumVerificationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumVerificationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumVerificationStatusFilter, {nullable:true})
    _min?: NestedEnumVerificationStatusFilter;

    @Field(() => NestedEnumVerificationStatusFilter, {nullable:true})
    _max?: NestedEnumVerificationStatusFilter;
}
